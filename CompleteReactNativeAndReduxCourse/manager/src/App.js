import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDaT3I71TWLONleu8EI_aFS8-viGnMMXBw',
      authDomain: 'manager-a64e6.firebaseapp.com',
      databaseURL: 'https://manager-a64e6.firebaseio.com',
      storageBucket: 'manager-a64e6.appspot.com',
      messagingSenderId: '922400156176'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
