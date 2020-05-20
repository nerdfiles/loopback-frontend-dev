import axios from 'axios';


const host = 'http://localhost:8080';
const modelName = 'users';

const authn = {
  login: login,
  register: register
};

/**
 * login
 *
 * @param email string Email.
 * @param pass string Password.
 * @param success function Callback.
 */
function login(email, pass, success) {
  axios.post(`${host}/api/${modelName}/login`, {
    email: email, 
    password: pass
  })
    .then(res => {
      success(res);
    });
}

/**
 * register
 *
 * @param name
 * @param email
 * @param pass
 * @param success
 */
function register(username, email, pass, success) {
  axios.post(`${host}/api/${modelName}`, {
    username: username, 
    email: email, 
    password: pass
  })
    .then(res => {
      success(res);
    })
    .catch(err => {
      success(err);
    });
}


export default authn;
