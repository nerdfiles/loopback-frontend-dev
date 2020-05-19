import authn from './authn';
import authz from './authz';
import user from './user';


const API = {
  ...authn,
  ...authz,
  ...user
};


export default API;
