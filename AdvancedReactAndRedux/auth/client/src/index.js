import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Feature from './components/feature';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="feature" component={Feature} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
