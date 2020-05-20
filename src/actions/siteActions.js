import API from '../api'


/**
 * getPosts
 */
export const getPosts = (skip) => {
  return dispatch => {
    API.site.getPosts(skip, res => {
      dispatch({
        type: 'GOT_SITE_POSTS',
        payload: res.data,
        skip: skip
      })
    })
  }
}

/**
 * getPostCount
 */
export const getPostCount = () => {
  return dispatch => {
    API.site.getPostCount(res => {
      dispatch({
        type: 'GOT_POST_COUNT',
        payload: res.data
      });
    });
  };
}

/**
 * getPostBySlug
 */
export const getPostBySlug = (slug, token) => {
  return dispatch => {
    API.site.getPostBySlug(slug, token, res => {
      dispatch({
        type: 'SET_FULL_POST_DATA',
        payload: res.data
      })
    })
  }
}

/**
 * setPostData
 */
export const setPostData = (post) => {
  return dispatch => {
    dispatch({
      type: 'SET_DEFAULT_POST_DATA',
      payload: post
    });

  }
}
