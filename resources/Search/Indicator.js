import React, { Component } from 'react';
import { View } from 'react-native';

import { SkypeIndicator } from 'react-native-indicators';
  
export default class Indicator extends Component {
  render() {
    return (
      <View style={{ position: 'absolute', top: 200 , left: 150 }}>
        <SkypeIndicator color='#88ADEE' />
      </View>
    )
  }
}
