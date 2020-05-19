import API from '../api'

export const getUsers = (token) => {
  return dispatch => {
    API.user.find(token, res => {
      dispatch({
        type: 'GOT_USERS',
        payload: res.data
      })
    })
  }
}

export const getPosts = (token ) => {
  return dispatch => {
    API.post.find(token, res => {
      dispatch({
        type: 'GOT_POSTS',
        payload: res.data
      });
    });
  }
}
