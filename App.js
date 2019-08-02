import React, { Component } from 'react';
import { View, YellowBox  } from 'react-native';
import firebase from'firebase';
//import DescriptionPed from './resources/Description/Description';
import Router from './resources/Tab/Router';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './resources/Functions/Reducers';

export default class App extends Component {

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyA0zSOqKThb5BqU3ZTOJIFucA2juJtsUo4",
      authDomain: "searchtag-a7f1b.firebaseapp.com",
      databaseURL: "https://searchtag-a7f1b.firebaseio.com",
      projectId: "searchtag-a7f1b",
      storageBucket: "searchtag-a7f1b.appspot.com",
      messagingSenderId: "881513315825",
      appId: "1:881513315825:web:0f6ba50d93a5ac1d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {

    YellowBox.ignoreWarnings(['Warning: Each', 'Warning: Failed']);
    console.disableYellowBox = true;

    return (
      <View style={{ flex: 1 }}>
         <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Router />  
        </Provider>     
      </View>
    );
  }
}
