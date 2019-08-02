import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import { connect } from 'react-redux';

import { deletaTag } from '../../Functions/Actions/index';

import { AntDesign } from '@expo/vector-icons';

class Tag extends Component{

    _excluirTag(tagItem){
        
        for(var i=0; i<=this.props.tag.length; i++){
            if(this.props.tag[i] == tagItem){
                this.props.tag.splice(i, 1);                
            }            
        }
        
         this.props.deletaTag();
    }

    createTag(){
        return  this.props.tag.map(item => {            
            return(
                <TouchableOpacity
                    key={item}
                    onPress={() => this._excluirTag(item)}
                    style={styles.tag}
                >
                    <AntDesign name="closecircle" size={16} color="black" style={styles.iconClose} />
                    <Text>{item}</Text>
                </TouchableOpacity>
            );
        })  
    }        

    render(){
        return(
            <View sytle={{ flex: 1}}>                
                <Text style={styles.texTag}># tags:</Text>
                <View style={{ flexDirection: 'row',flexWrap: 'wrap' }}>
                    {this.createTag()}
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return (
        { }
    );
  }

  const styles = StyleSheet.create({
      tag: {
        backgroundColor: '#87CEFA', 
        borderRadius: 50, 
        paddingHorizontal: 8,
        paddingVertical: 5, 
        margin:5,
        flexDirection: 'row'
      },
      texTag:{
        margin: 5, 
        fontWeight: 'bold'
      },
      iconClose: {
        paddingRight: 5  
      }
  })
export default connect(
    mapStateToProps, { deletaTag }
)(Tag);