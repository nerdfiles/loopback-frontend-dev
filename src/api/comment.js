import axios from 'axios'


const host = 'http://localhost:8080';
const modelName = 'Comments';

const comment = {
  postComment: postComment,
  getCommentById: getCommentById
};

/**
 * postComment
 *
 * @param comment
 * @param token
 * @param success
 */
function postComment(comment, token, success) {
  axios.post(`${host}/api/${modelName}?access_token=${token}`, comment, {
    params: {
      filter: {
        include: { user: 'Profile' }
      }
    }
  })
    .then(res => {
      success(res);
    });
}

function getCommentById(commentId, token, success) {
  axios.get(`${host}/api/${modelName}/${commentId}?access_token=${token}`, {
    params: {
      filter: {
        include: { user: 'Profile' }
      }
    }
  })
    .then(res => {
      success(res);
    });
}

export default comment;
