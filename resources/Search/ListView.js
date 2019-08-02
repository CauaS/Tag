import React,  { Component } from 'react';
import { View, ListView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListViewTag extends Component {

    constructor(props) {
        super(props) 
             
    }

    componentWillMount(){
        this.props.stateTag ? this._criaFonteDados(this.props.pedidosTags) : this._criaFonteDados(this.props.pedido);
    }

    componentWillReceiveProps(nextProps){
        this.props.stateTag ? this._criaFonteDados(nextProps.pedidosTags) : this._criaFonteDados(nextProps.pedido);
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
                <TouchableOpacity 
                    style={styles.viewConteudo}
                    onPress={() => Actions.PedidoCompleto({
                                        title:item.pedido,
                                        pedido: item.pedido,
                                        descricao: item.descricao,
                                        tags: item.tag  
                                   })} 
                >    
                    <View style={styles.viewNroPedido}>
                        <Text style={styles.textPedido}>{item.pedido}</Text>
                    </View>
                    <Text numberOfLines={3} style={styles.textDecricao}>{item.descricao}</Text>
                    <View style={styles.viewTag}>{this._renderTag(item.tag)}</View>
                </TouchableOpacity>
            ); 
        });
       } else {
            return (
                <TouchableOpacity 
                    style={styles.viewConteudo} 
                    onPress={() => Actions.PedidoCompleto({
                                        title:rowData.pedido,
                                        pedido: rowData.pedido,
                                        descricao: rowData.descricao,
                                        tags: rowData.tag
                                    })}
                    >
                     <View style={styles.viewNroPedido}>
                        <Text style={styles.textPedido}>{rowData.pedido}</Text>
                    </View>
                    <Text numberOfLines={3} style={styles.textDecricao}>{rowData.descricao}</Text>
                    <View style={styles.viewTag}>{this._renderTag(rowData.tag)}</View>
                </TouchableOpacity>
            );
       }
    }

    render(){
        return(
            <View style={styles.viewListView}>               
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
    viewListView: {
        width: '98%',//Dimensions.get('window').width, 
        height: '78.5%',
    },
    viewConteudo: {   
        width: '100%',    
        backgroundColor: 'white' , 
        borderRadius: 15 ,
        marginTop: 5,
        paddingBottom: 10, 
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
        borderTopLeftRadius: 15,
        width: 63, 
        padding: 5,
        marginBottom: 10
    }
})

export default ListViewTag;