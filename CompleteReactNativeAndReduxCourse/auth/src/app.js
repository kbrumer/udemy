import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBCxLo7n73J-2YtCItIN7EROTPs7vdDw0Y',
      authDomain: 'authentication-deaef.firebaseapp.com',
      databaseURL: 'https://authentication-deaef.firebaseio.com',
      storageBucket: 'authentication-deaef.appspot.com',
      messagingSenderId: '1082347566036'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
