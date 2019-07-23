import firebase from 'firebase';
//import console = require('console');

export const alteraPedido = (pedido) => {
    return {
        type: 'ALTERA_PEDIDO',
        payload: pedido
    }
}

export const alteraDescricao = (descricao) => {
    return {
        type: 'ALTERA_DESCRICAO',
        payload: descricao
    }
}

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

export const alteraTag = (tag) => {
    return {
        type: 'ALTERA_TAG',
        payload: tag
    }
}

export const deletaTag = () => {

    return {
        type: 'DELETA_TAG'
    }
}