import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export class Tag extends Component{

    constructor(props){
        super(props);
    } 

    createTag(){
        return this.props.tag.map((item) => {
            console.log(item)
            return(
                <TouchableOpacity
                    onPress={() => console.log(item.id)}
                    key={item.id}
                    style={{ backgroundColor: '#87CEFA', borderRadius: 50, padding:5, margin:5 }}
                >
                        <Text>#{item.tag}</Text>
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
            </View>
        );
    }
}

export default Tag;