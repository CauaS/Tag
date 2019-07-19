import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import InputTag from '../InputTag/InputTag';

import { connect } from 'react-redux';
import { alteraPedido, alteraDescricao } from '../Functions/Actions/index';

class DescriptionPed extends Component{

    alterarPedido( pedido ){
        this.props.alteraPedido(pedido)
    }
    alterarDescricao(descricao){
        this.props.alteraDescricao(descricao);
    }
    
    render(){
        const { pedido, descricao } = this.props;

        return(
            <View style={styles.viewPedidoDescricao}>
                <TextInput 
                    onChangeText={descricao => this.alterarDescricao(descricao)}
                    value={this.props.descricao}
                    underlineColorAndroid={"#428AF8"}
                    placeholder='Descrição'
                    multiline={true}
                    style={styles.inputDecricao}
                />
                <TextInput 
                    onChangeText={pedido => this.alterarPedido(pedido)}
                    value={this.props.pedido}
                    underlineColorAndroid={"#428AF8"}
                    placeholder='Pedido'
                    keyboardType='numeric'
                    style={styles.inputPedido}
                />
                <InputTag 
                    pedido={pedido}
                    descricao={descricao}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            pedido: state.firebase.pedido,
            descricao: state.firebase.descricao
        }
    );
  }

export default connect(
    mapStateToProps, { alteraPedido, alteraDescricao }
)(DescriptionPed);

const styles = StyleSheet.create({
    inputPedido: {
        borderColor: 'gray', 
        margin: 5, 
        padding: 10, 
        height: 40
    },
    inputDecricao: {
        borderColor: 'gray', 
        margin: 5, 
        padding: 10, 
        textAlignVertical: 'top'
    },
    viewPedidoDescricao: {
        backgroundColor:'white', 
        borderRadius: 10, 
        margin: 5, 
        elevation: 2
    }
})