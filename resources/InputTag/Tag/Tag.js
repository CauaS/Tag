import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Button } from 'react-native'

import { connect } from 'react-redux';

import { salvaDados } from '../../Functions/Actions/index';


class Tag extends Component{

    buscarDados(){
        const { tag, pedido, descricao } = this.props;

        this.props.salvaDados({ tag, pedido, descricao });
    }

    createTag(){ 
        return this.props.tag.map(item => {
            return(
                <TouchableOpacity
                    onPress={() => console.log({item})}
                    style={{ backgroundColor: '#87CEFA', borderRadius: 50, padding:5, margin:5 }}
                >
                        <Text>#{item}</Text>
                </TouchableOpacity>
            );
        })  
    }        

    render(){
        return(
            <View>
                <Text style={{ margin: 5, fontWeight: 'bold' }}># tags:</Text>
                <View style={{ flexDirection: 'row',flexWrap: 'wrap' }}>
                    {this.createTag()}
                </View>
                <View><Button title='press' onPress={() => this.buscarDados()}/></View>                
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({ });
  }

export default connect(
    mapStateToProps, { salvaDados }
)(Tag);