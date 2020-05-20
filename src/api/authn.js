import axios from 'axios';


const host = 'http://localhost:8080';
const modelName = 'users';

const authn = {
  login: login 
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


export default authn;
