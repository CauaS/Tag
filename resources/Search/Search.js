import React,  { Component } from 'react';
import { View, StyleSheet, TextInput} from 'react-native';
import { Ionicons,  FontAwesome } from '@expo/vector-icons';
import ListViewTag from './ListView';

class Search extends Component {
    constructor(props){
        super(props);

        this.state={
            busca: ''
        }
    }

    render(){
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
                            />
                        </View>                       
                    </View>
                    <ListViewTag />
                </View>
            </View>
        )
    }
}

export default Search;

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