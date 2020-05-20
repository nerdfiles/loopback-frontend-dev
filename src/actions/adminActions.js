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

export const addPost = (post, token) => {
  return dispatch => {
    API.post.create(post, token, res => {
      dispatch({
        type: 'POST_ADDED',
        payload: res.data
      })
    })
  }
}

export const updatePost = (post, token) => {
  return dispatch => {
    API.post.update(post, token, res => {
      dispatch({
        type: 'POST_UPDATED',
        payload: res.data
      });
    });
  };
}

export const uploadImage = (imageData, token, postId, userId) => {
  return dispatch => {
    API.post.uploadImage(imageData, token, postId, userId, res => {
      dispatch({
        type: 'POST_IMAGE_UPLOADED',
        payload: res.data
      });
    });
  };
}

export const getPost = (id, token) => {
  return dispatch => {
    API.post.findOne(id, token, res => {
      dispatch({
        type: 'GOT_POST',
        payload: res.data
      });
    });
  };
}
