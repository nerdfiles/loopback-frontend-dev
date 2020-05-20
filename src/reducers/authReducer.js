const defaultState = {
  user: {},
  token: null,
  error: null,
  profile: null
};

const auth = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        token: action.payload.token
      };

    case 'AFTER_LOGIN':
      return {
        ...state,
        user: action.payload,
        profile: action.payload.Profile
      }

    case 'CLEAR_AUTH': 
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: action.payload.error
      };
    case 'SHOW_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default auth;
