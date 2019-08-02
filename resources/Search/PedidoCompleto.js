import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class PedidoCompleto extends Component {

    _renderTag(lista){
        return lista.map((item) => {
            return(
                <View key={item}>
                    <Text style={styles.textTag}>#{item}</Text>
                </View>                
            );
        })
        
    }
  render() {
      
    const { descricao, pedido, tags } = this.props;

    return(
        <View>
            <View style={styles.viewConteudo}>                     
                <View style={styles.viewNroPedido}>
                    <Text style={styles.textPedido}>{pedido}</Text>
                </View>
                <Text style={styles.textDecricao}>{descricao}</Text>
                <View style={styles.viewTag}>{this._renderTag(tags)}</View>                
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    viewConteudo: {   
        width: '100%',    
        backgroundColor: 'white',
        marginTop: 3,
        elevation: 4,
        paddingBottom: 5,
        flexWrap: 'wrap',
    },
     textPedido:{
        fontWeight: 'bold',
        fontSize: 18         
    },
    textDecricao:{
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,     
    },
    textTag: { 
        backgroundColor: '#87CEFA', 
        borderRadius: 60, 
        padding:5, 
        margin:2,
        fontSize: 15,
    },
    viewTag: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10,        
        marginBottom: 10
    },
    viewNroPedido: {
        backgroundColor: '#87CEFA', 
        borderBottomRightRadius: 15,
        width: 63, 
        padding: 5,
        marginBottom: 10
    }
})
