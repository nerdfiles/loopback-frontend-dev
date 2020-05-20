import API from '../api'


export const clearAuth = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_AUTH',
      payload: {
        user: null,
        token: null,
        error: null
      }
    })
  }
}

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


export const register = (username, email, pass) => {
  return dispatch => {
    API.authn.register(username, email, pass, res => {
      if (res.status === 200) {
        dispatch(login(email, pass));
      } else {
        const response = res.response
        const status = response.status
        const statusText = response.statusText
        const data = response.data
        const errorObject = data.error
        const errorMessage = errorObject.message
        if (errorObject) {
          dispatch({
            type: 'SHOW_ERROR',
            payload: errorMessage 
          });
        }
      }
    });
  };
};
