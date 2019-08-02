import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import InputTag from '../InputTag/InputTag';

import { connect } from 'react-redux';
import { alteraPedido, alteraDescricao, salvaDados } from '../Functions/Actions/index';

class DescriptionPed extends Component{

    alterarPedido( pedido ){
        this.props.alteraPedido(pedido)
    }
    alterarDescricao(descricao){
        this.props.alteraDescricao(descricao);
    }
    _salvarDados(){
        const { tag, pedido, descricao } = this.props;

        if(( pedido | descricao) == '') {
            Alert.alert('Erro', 'Campos pedido ou descrição estão em brancos.');
        }else {
            this.props.salvaDados({ tag, pedido, descricao });
        }        
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
                <TouchableOpacity 
                    onPress={() => this._salvarDados()} 
                        style={styles.buttonSave}>            
                    <Text style={styles.textButtonSave}>Salvar</Text>             
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return (
        {
            pedido: state.firebase.pedido,
            descricao: state.firebase.descricao,
            tag: state.firebase.tag 
        }
    );
  }

export default connect(
    mapStateToProps, { alteraPedido, alteraDescricao, salvaDados }
)(DescriptionPed);

const styles = StyleSheet.create({
    viewPedidoDescricao: {
        backgroundColor:'white', 
        borderRadius: 10, 
        marginTop: 30,
        marginHorizontal: 5, 
        elevation: 2,
        height: 530
    },
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
    buttonSave: {
        position: 'absolute',
        top: 450,
        left: 126,       
        height: 100, 
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#337DFF',
        elevation: 5 
      },
      textButtonSave: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
      }
})