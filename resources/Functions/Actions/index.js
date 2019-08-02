import * as firebase from 'firebase';
import 'firebase/firestore';

export const alteraPedido = (pedido) => {
    return {
        type: 'ALTERA_PEDIDO',
        payload: pedido
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const alteraDescricao = (descricao) => {
    return {
        type: 'ALTERA_DESCRICAO',
        payload: descricao
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const alteraTag = (tag) => {
    return {
        type: 'ALTERA_TAG',
        payload: tag
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const sucessoInsercao = (dispatch, value) => {
    dispatch(
        { type: 'SUCESSO_INSERCAO', 
            payload: value
        }
    )
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deletaTag = () => {
    return {
        type: 'DELETA_TAG'
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const buscaPedido = (pedido) => {
    if(pedido == ''){  
        var countpedido = 0;

        return dispatch => {
            firebase.database()
                .ref(`/Dados/`)
                .once('value', snapshot => {
                    snapshot.forEach(item => { countpedido++ })

                    dispatch({
                        type:'BUSCA_TODOS_PEDIDOS',
                        payload: snapshot.val()
                    })                   
                })
                .then(value => sucessoBuscaPedido(dispatch, countpedido ))
                .catch(error => erroBuscaPedido(dispatch, error))
        }
    } else {
        return dispatch => {
            firebase.database()
                .ref(`/Dados/${pedido}`)
                .once('value', snapshot => {                    
                    if(snapshot.exists()){                  
                        dispatch({
                            type:'BUSCA_PEDIDO',
                            payload: snapshot.val()
                        })
                    }else{
                        dispatch({
                            type:'ERRO_BUSCA_PEDIDO',
                            payload: true
                        })
                    }
                })
                .then(value => sucessoBuscaPedido(dispatch, countpedido=1))
                .catch(error => erroBuscaPedido(error))
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const sucessoBuscaPedido = (dispatch, countpedido) => {
    dispatch({
        type: 'SUCESSO_BUSCA_PEDIDO',
        countReg: countpedido
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const erroBuscaPedido = (error) => {
    return {
        type: 'ERRO_BUSCA_PEDIDO',
        payload: error
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const alteraStateTag = () => {
    return {
        type: 'ALTERA_STATE_TAG'
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const buscaTag = (tag, tipoPesquisaTag) => {   
    tags = tag.split(',');
    var countpedidoTag = 0;
    
    if(tipoPesquisaTag == true){
        var count = 0;       
        var countpedidoTag = 0;

        return dispatch => {
            firebase.database()
            .ref(`/Dados/`)
            .once('value', snapshot => {
                snapshot.forEach(item => {
                    for(var i=0; i<=tags.length-1; i++){                        
                        for(var j=0; j<=item.val().tag.length-1; j++){
                            if(tags[i] == item.val().tag[j]){
                               count++;
                                if(count == tags.length){
                                    countpedidoTag++;
                                    dispatch({
                                        type:'BUSCA_TAGS',
                                        payload: item.val()
                                    })  
                                }                       
                            }                           
                        }
                    }
                    count = 0;
                });                   
            })
            .then(value => sucessoBuscaTags(dispatch,value, countpedidoTag ))
            .catch(error => erroBuscaTags(error))
        }  
    }else{
        var countpedidoTag = 0;

        return dispatch => {
            firebase.database()
            .ref(`/Dados/`)
            .once('value', snapshot => {
                snapshot.forEach(item => {
                    for(var i=0; i<=tags.length-1; i++){
                        for(var j=0; j<=item.val().tag.length-1; j++){
                            if(tags[i] == item.val().tag[j]){
                                countpedidoTag++;                   
                                dispatch({
                                    type:'BUSCA_TAGS',
                                    payload: item.val()
                                })
                            }
                        }
                    }
                });                   
            })
            .then(value => sucessoBuscaTags(dispatch,value, countpedidoTag))
            .catch(error => erroBuscaTags(error))
        }
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const sucessoBuscaTags = (dispatch,value, nroPedidoTag) => {
    dispatch({
        type: 'SUCESSO_BUSCA_TAGS',
        payload: value,
        countReg: nroPedidoTag
    })
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const erroBuscaTags = (error) => {
    dispatch({
        type: 'ERRO_BUSCA_TAGS',
        payload: error
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const pesquisaTagPedido = () => {
    return {
        type: 'PESQUISA_TAG_PEDIDO'
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const alteraTipoPesquisaTag = () => {
    return {
        type: 'ALTERA_STATE_TIPO_PEQUISA_TAG'
    } 
}

export const alteraStateIndicator = () => {
    return {
        type: 'ALTERA_STATE_INDICATOR'
    }
}