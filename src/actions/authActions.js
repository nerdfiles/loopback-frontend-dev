import API from '../api'


export const login = (email, pass) => {

  return (dispatch) => {
    API.authn.login(email, pass, res => {

      // @TODO
      dispatch({
        type: 'LOGIN',
        payload: {
          email: email,
          token: res.data.id,
          userId: res.data.userId
        }
      });
    });
  };

};


export const register = (email, pass) => {
  return {
    type: 'REGISTER',
    payload: {
      email, 
      pass
    }
  };
};
