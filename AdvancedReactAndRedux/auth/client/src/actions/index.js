import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

// {
//     "email": "test@example.com",
//     "password": "password"
// }


export function signinUser({ email, password }){
  return function(dispatch){
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password });


    // If request is good
    // - update state to indicate user is auth
    // - save JWT token
    // - redirect to /feature

    // If request is bad
    // - Show an error to the user
  };

}
