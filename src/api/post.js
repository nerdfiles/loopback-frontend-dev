import axios from 'axios';


const host = 'http://localhost:8080';
const modelName = 'Posts';

const post = {
  find: find,
  findOne: findOne
};

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
function findOne() {
}


export default post;
