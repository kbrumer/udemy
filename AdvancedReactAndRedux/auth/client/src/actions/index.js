import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3090';

// {
//     "email": "test@example.com",
//     "password": "password"
// }


export function signinUser({ email, password }){
  return function(dispatch){
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good
        // - update state to indicate user is auth
        dispatch({ type: AUTH_USER });
        // - save JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to /feature
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };

}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
