//import console = require("console");
const INITIAL_STATE = { 
    pedido: '',
    descricao: '',
    tag:[],
    buscaPedido: [],
    erroBuscaPedido: false,
    sucessoBuscaPedido: false,
    todosPedidos: false,
    stateTag: false,
    buscaTags: [],
    pesquisaTagPedido: '',
    tipoPesquisaTag: false,
    nro_registro: 0,
    indicator: false
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
   
    switch(action.type){
       case 'ALTERA_PEDIDO': 
            return { ...state, pedido:action.payload } 
       case 'ALTERA_DESCRICAO':
            return { ...state, descricao:action.payload }
       case 'ALTERA_TAG':
            return { ...state, tag: [...state.tag, action.payload] }
       case 'SUCESSO_INSERCAO':
          return { ...state, pedido: '', descricao: '', tag: [] }
       case 'DELETA_TAG':
          return {...state, tag: [...state.tag] }
       case 'BUSCA_PEDIDO':
          return {...state, buscaPedido:[action.payload], todosPedidos:false, erroBuscaPedido: false }
       case 'BUSCA_TODOS_PEDIDOS':
         return {...state, buscaPedido:[action.payload], todosPedidos:true, erroBuscaPedido: false, buscaTags:[] }
       case 'SUCESSO_BUSCA_PEDIDO':
          return {...state, buscaTags:[], nro_registro: action.countReg, indicator: false }
       case 'ERRO_BUSCA_PEDIDO':
          return {...state, erroBuscaPedido:action.payload, buscaTags:[] }
       case 'ALTERA_STATE_TAG':          
          return {...state, stateTag: !state.stateTag, buscaPedido: [],buscaTags:[], todosPedidos:false, nro_registro: 0 }
       case 'BUSCA_TAGS':
          return {...state, buscaTags:[...state.buscaTags, action.payload], todosPedidos: false }
       case 'PESQUISA_TAG_PEDIDO':
            return {...state, buscaTags:[], buscaPedido: [], nro_registro: 0 }
       case 'SUCESSO_BUSCA_TAGS':
            return {...state, nro_registro:action.countReg, erroBuscaPedido:false, indicator: false }
       case 'ALTERA_STATE_TIPO_PEQUISA_TAG':
            return {...state,  tipoPesquisaTag: !state.tipoPesquisaTag, buscaTags:[], nro_registro: 0 }  
       case 'ALTERA_STATE_INDICATOR':
            return {...state,  indicator: !state.indicator }  
       default: 
            return state;
   }
    
}