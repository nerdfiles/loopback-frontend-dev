import axios from 'axios';


const host = 'http://localhost:8080';

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
  axios.post(`${host}/api/users/login`, {
    email: email, password: pass
  })
    .then(res => {
      success(res);
    });
}


export default authn;
