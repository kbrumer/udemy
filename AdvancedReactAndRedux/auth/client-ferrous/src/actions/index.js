import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

// const ROOT_URL = 'http://brumer.homenet.org:9000';
const ROOT_URL = 'http://localhost:9000';

export function signinUser({ email, password }){
  axios.defaults.withCredentials = true;
  return function(dispatch){
    // Submit email/password to server
    const orgId = 'c9a3b3de-e88d-46b5-8fb2-4d69befa41ba';
    const host = '50.246.238.78';
    axios.post(`${ROOT_URL}/api/login`, { username: email, password, orgId, host })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', 'true');
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signupUser({ email, password }){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(error => {
        dispatch(authError(error.response.data.error));
      });
  };
}

export function signoutUser(){
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER
  }
}

export function fetchMessage(){
  axios.defaults.withCredentials = true;
  return function(dispatch){
    axios.get(`${ROOT_URL}/api/users/current`)
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
