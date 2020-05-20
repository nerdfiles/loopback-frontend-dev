import API from '../api'


export const postComment = (comment, token) => {
  return dispatch => {
    API.site.postComment(comment, token, res => {
      if (res.status === 200) {
        API.site.getCommentById(res.data.id, token, commentRes => {
          dispatch({
            type: 'POST_COMMENT',
            payload: commentRes.data
          });
        })
      }
    });
  };
}

// @TODO action not even used as an action anywhere
export const getCommentById = (commentId, token) => {
  return dispatch => {
    API.site.getCommentById(commentId, token, res => {
      if (res.status === 200) {
        dispatch({
          type: 'GOT_COMMENT_BY_ID',
          payload: res.data
        });
      }
    });
  };
}

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
