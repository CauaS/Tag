//import console = require("console");
const INITIAL_STATE = { 
    pedido: '',
    descricao: '',
    tag:[],
    buscaPedido: [],
    erroBuscaPedido: '',
    sucessoBuscaPedido: false,
    todosPedidos: false
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
          return {...state, buscaPedido:[action.payload], todosPedidos:false}
       case 'BUSCA_TODOS_PEDIDOS':
         return {...state, buscaPedido:[action.payload], todosPedidos:true}
       case 'SUCESSO_BUSCA_PEDIDO':
          return {...state, sucessoBuscaPedido:true }
       case 'ERRO_BUSCA_PEDIDO':
          return {...state, erroBuscaPedido:action.payload }
       default: 
            return state;
   }
    
}