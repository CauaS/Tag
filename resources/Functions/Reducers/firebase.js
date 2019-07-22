//import console = require("console");
const INITIAL_STATE = { 
    pedido: '',
    descricao: '',
    tag:[]
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
     case 'DELETA_TAG':
          return {...state, tag: action.payload }
       default: 
            return state;
   }
    
}