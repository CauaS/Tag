import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import notFound from '../../assets/notFound.png';

export default class ErroMsg extends Component {
  render() {
    return (
        <View>
            <View style={styles.viewErroMsg}>
                <Text style={styles.textErro}>Pedido invalido!</Text>
            </View>
            <View style={{ marginTop: 145 }}>
                <Image
                    style={styles.imageErro}
                    source={notFound}
                    resizeMode='contain'
                />
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    viewErroMsg: {
        height: 35,
        width: '98%',
        borderRadius: 10,
        backgroundColor: '#88ADEE', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textErro: {
        padding: 10, 
        fontWeight:'bold', 
        fontSize: 15 
    },
    imageErro: {
        height: 192, 
        width: '100%'
    }
});