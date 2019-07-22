import React,  { Component } from 'react';
import { View, ListView, Text, StyleSheet } from 'react-native';

class ListViewTag extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

        const lista = [{tag:['', ''], pedido: '', descricao: ''}];

        this.state = {
            dataSource: ds.cloneWithRows(lista)
        }
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
           if(rowData.pedido != ''){
                return (
                    <View style={styles.viewConteudo}>
                        <Text style={styles.textPedido}>{rowData.pedido}</Text>
                        <Text style={styles.textDecricao}>{rowData.descricao}</Text>
                        <View style={styles.viewTag}>{this._renderTag(rowData.tag)}</View>
                    </View>
                );
           }  
           return (
            <View>
                <Text> Sem resultados...</Text>
            </View>
        );
        }

    render(){
        const { dataSource } = this.state;

        return(
            <View style={{ paddingBottom: 205 }}>
                <ListView 
                    dataSource={dataSource}
                    renderRow={(rowData) => this._renderRow(rowData)}
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
        marginTop: 5, 
        elevation: 2,
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
        margin:5,
        fontSize: 15
    },
    viewTag: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
export default ListViewTag;