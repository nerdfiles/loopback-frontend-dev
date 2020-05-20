const defaultState = {
  users: [],
  posts: [],
  post: {}
}

const admin = (state = defaultState, action) => {
  switch(action.type) {

    case 'GOT_USERS':
      return {
        ...state,
        users: action.payload
      };

    case 'GOT_POSTS':
      return {
        ...state,
        posts: action.payload
      }

    case 'POST_ADDED': 
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        post: action.payload
      }

    case 'GOT_POST': 
      return {
        ...state,
        post: action.payload
      }

    case 'POST_UPDATED':
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload,
        },
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            // update post properties
            return {
              ...post,
              ...action.payload
            }
          } else {
            // return original post
            return post
          }
        })
      }

    case 'POST_IMAGE_UPLOADED':
      return {
        ...state,
        post: {
          ...state.post,
          PostImage: [
            action.payload
          ]
        }

      }
    default:
      return state;
  }
};

export default admin;
