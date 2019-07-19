import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Tag from './Tag/Tag';

import { connect } from 'react-redux';

import { alteraTag } from '../Functions/Actions/index';

//import console = require('console');

class InputTag extends Component {    

    constructor(props){
        super(props);

        this.state={
            text: '',
        }
    }
    keyboardDidHide(){
        this.setState({
            text: ''        
        });     
       
        this.props.alteraTag(this.state.text);
    }

    render(){ 
        const { pedido, descricao } = this.props;

        return(
            <View>
                <TextInput 
                    onChangeText={text => this.setState({ text: text })}
                    value={this.state.text}
                    underlineColorAndroid={"#428AF8"}
                    placeholder='#'
                    style={ styles.inputTag }
                    onSubmitEditing={() => this.keyboardDidHide()}
                />
                <Tag tag={this.props.tag} pedido={pedido} descricao={descricao} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({ tag: state.firebase.tag });
  }

export default connect(
    mapStateToProps, { alteraTag }
)(InputTag);

const styles = StyleSheet.create({
    inputTag: {
        borderColor: 'gray', 
        borderWidth: 0, 
        margin: 5, 
        paddingLeft: 6, 
        height: 40  
    }
})