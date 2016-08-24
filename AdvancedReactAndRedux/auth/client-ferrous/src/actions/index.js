import axios from 'axios';

// external
// const ROOT_URL = 'http://brumer.homenet.org:9000';

// internal
// const ROOT_URL = 'http://192.168.1.30:9000';

// local
const ROOT_URL = 'http://localhost:9000';

export function signinUser({ email, password }){
  return function(dispatch){
    // Submit email/password to server
    const orgId = 'c9a3b3de-e88d-46b5-8fb2-4d69befa41ba';
    const host = '50.246.238.78';
    axios.post(`${ROOT_URL}/api/login`, { username: email, password, orgId, host });


    // If request is good
    // - update state to indicate user is auth
    // - save JWT token
    // - redirect to /feature

    // If request is bad
    // - Show an error to the user
  };

}

// server:
// npm install --save cors
// const cors = require('cors');
// app.use(cors());
