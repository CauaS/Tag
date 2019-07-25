import React,  { Component } from 'react';
import { View, ListView, Text, StyleSheet } from 'react-native';
//import console = require('console');

class ListViewTag extends Component {

    constructor(props) {
        super(props) 
             
    }

    componentWillMount(){
        this._criaFonteDados(this.props.pedido);
    }

    componentWillReceiveProps(nextProps){
        this._criaFonteDados(nextProps.pedido);
    }

    _criaFonteDados(fonte) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        
        this.dataSource = ds.cloneWithRows(fonte);
    }

    _renderTag(lista){
        return lista.map((item) => {
            return(
                <View key={item}>
                    <Text style={styles.textTag}>#{item}</Text>
                </View>                
            );
        })
        
    }  
    _renderRow(rowData) {
        todosPedidos = Object.values(rowData);
        
        if(this.props.todosPedidos == true){
          return todosPedidos.map((item) => {
              return (
                <View style={styles.viewConteudo}>
                    <Text style={styles.textPedido}>{item.pedido}</Text>
                    <Text style={styles.textDecricao}>{item.descricao}</Text>
                    <View style={styles.viewTag}>{this._renderTag(item.tag)}</View>
                </View>
            ); 
        });
       } else {
            return (
                <View style={styles.viewConteudo}>
                    <Text style={styles.textPedido}>{rowData.pedido}</Text>
                    <Text style={styles.textDecricao}>{rowData.descricao}</Text>
                    <View style={styles.viewTag}>{this._renderTag(rowData.tag)}</View>
                </View>
            );
       }
    }

    render(){

        return(
            <View style={{ paddingBottom: 205 }}>
                <ListView 
                    dataSource={this.dataSource}
                    renderRow={(rowData) => this._renderRow(rowData)}
                    enableEmptySections
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewConteudo: {        
        flex: 1,   
        width: 348,     
        backgroundColor: 'white' , 
        borderRadius: 10 ,
        marginTop: 3, 
        elevation: 2,
        paddingBottom: 5,
        flexWrap: 'wrap'
    },
    textPedido:{
        margin: 5,
        fontWeight: 'bold',
        fontSize: 18         
    },
    textDecricao:{
        marginHorizontal: 8,
        fontSize: 16         
    },
    textTag: { 
        backgroundColor: '#87CEFA', 
        borderRadius: 60, 
        padding:5, 
        margin:2,
        fontSize: 15
    },
    viewTag: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
export default ListViewTag;