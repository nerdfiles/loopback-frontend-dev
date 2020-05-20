import axios from 'axios';


const host = 'http://localhost:8080';
const modelName = 'Posts';

const post = {
  find: find,
  findOne: findOne,
  create: create,
  update: update,
  uploadImage: uploadImage,
  makeFileUrl: makeFileUrl
};

function makeFileUrl(url, token) {
  return host + url + "?access_token=" + token;
}

function uploadImage(imageData, token, postId, userId, success) {
  axios.post(`${host}/api/PostImages/upload?post_id=${postId}&user_id=${userId}&access_token=${token}`, imageData)
    .then(res => {
      success(res);
    });
}

/**
 * find
 */
function find(token, success) {
  axios.get(`${host}/api/${modelName}?access_token=${token}`)
    .then(res => {
      success(res);
    });
};

/**
 * findOne
 */
function findOne(id, token, success) {
  axios.get(`${host}/api/${modelName}/${id}?access_token=${token}`, {
    params: {
      filter: {
        include: 'PostImage'
      }
    }
  })
    .then(res => {
      success(res);
    });

}

/**
 * update
 */
function update(post, token, success) {
  //post.created_at = new Date();
  axios.patch(`${host}/api/${modelName}?access_token=${token}`, post)
    .then(res => {
      success(res);
    });

}

/**
 * create
 */
function create(post, token, success) {
  post.created_at = new Date();
  axios.post(`${host}/api/${modelName}?access_token=${token}`, post)
    .then(res => {
      success(res);
    });

}


export default post;
