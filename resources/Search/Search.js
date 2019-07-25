import React,  { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListViewTag from './ListView';

import { connect } from 'react-redux';

import { buscaPedido } from '../Functions/Actions/index';

class Search extends Component {
    constructor(props){
        super(props);

        this.state={
            busca: ''
        }
    }
    _buscarPedido(pedido){
        this.props.buscaPedido(pedido);
    }

    render(){
        const { todosPedidos, BuscaPedido, sucessoBuscaPedido} = this.props;

        return(
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View style={styles.viewSerch}>
                        <TextInput 
                            placeholder='tag...'
                            onChangeText={busca => this.setState({ busca: busca })}
                            value={this.state.busca}
                            style={styles.textSearch}
                        />
                        <View style={styles.iconSearch}>
                            <Ionicons 
                                name="ios-search" 
                                size={32} 
                                color="black"
                                onPress={() => this._buscarPedido(this.state.busca)} 
                            />
                        </View>                       
                    </View>
                    { sucessoBuscaPedido ? (
                        <ListViewTag pedido={BuscaPedido} todosPedidos={todosPedidos}/>
                    ): (
                        <View><Text>Sem resultados...</Text></View>
                    )}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return (
        { 
            BuscaPedido: state.firebase.buscaPedido,
            sucessoBuscaPedido: state.firebase.sucessoBuscaPedido,
            todosPedidos: state.firebase.todosPedidos
        }
    )
}

export default connect(
    mapStateToProps, { buscaPedido }
 )(Search);



const styles = StyleSheet.create({
    viewSerch: { 
        height: 50, 
        width: '97%',        
        backgroundColor: 'white' , 
        borderRadius: 10 ,
        marginTop: 72,
        marginBottom: 10, 
        elevation: 2,
        flexDirection: 'row',
        zIndex: 0 
    },
    textSearch:{
        margin: 10,
        zIndex: 0,
        fontSize: 15         
    },
    iconSearch: {
        position: 'absolute',
        left: 315,
        top: 8,
        zIndex: 1,
        backgroundColor: 'white'
    }
})