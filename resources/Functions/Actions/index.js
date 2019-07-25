import firebase from 'firebase';
//import console = require('console');

export const alteraPedido = (pedido) => {
    return {
        type: 'ALTERA_PEDIDO',
        payload: pedido
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const alteraDescricao = (descricao) => {
    return {
        type: 'ALTERA_DESCRICAO',
        payload: descricao
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const alteraTag = (tag) => {
    return {
        type: 'ALTERA_TAG',
        payload: tag
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const salvaDados = ({ pedido, descricao, ...tag }) => {

    return dispatch => {
        firebase.database()
            .ref(`/Dados/${pedido}`)
            .set({
                descricao: descricao,
                pedido: pedido,
                tag: tag.tag
            }).then(value => sucessoInsercao(dispatch, value))
    }
}

export const sucessoInsercao = (dispatch, value) => {
    dispatch(
        { type: 'SUCESSO_INSERCAO', 
            payload: value
        }
    )
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deletaTag = () => {

    return {
        type: 'DELETA_TAG'
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const buscaPedido = (pedido) => {

    if(pedido == ''){        
        return dispatch => {
            firebase.database()
                .ref(`/Dados/`)
                .once('value', snapshot => {
                    dispatch({
                        type:'BUSCA_TODOS_PEDIDOS',
                        payload: snapshot.val()
                    })                   
                })
                .then(value => sucessoBuscaPedido(dispatch,value))
                .catch(error => erroBuscaPedido(dispatch, error))
        }
    } else {
        return dispatch => {
            firebase.database()
                .ref(`/Dados/${pedido}`)
                .once('value', snapshot => {
                    dispatch({
                        type:'BUSCA_PEDIDO',
                        payload: snapshot.val()
                    })
                })
                .then(value => sucessoBuscaPedido(dispatch,value))
                .catch(error => erroBuscaPedido(dispatch, error))
        }
    }
}

export const sucessoBuscaPedido = (dispatch, value) => {
    dispatch({
        type: 'SUCESSO_BUSCA_PEDIDO',
        payload: value
    })
}

export const erroBuscaPedido = (dispatch, error) => {
    dispatch({
        type: 'ERRO_BUSCA_PEDIDO',
        payload: error
    })
}