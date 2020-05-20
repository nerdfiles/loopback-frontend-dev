import axios from 'axios';


const host = 'http://localhost:8080';
const modelName = 'users';

const user = {
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
function findOne(userId, token, success) {
  axios.get(`${host}/api/${modelName}/${userId}?access_token=${token}`, {
    params: {
      filter: {
        include: 'Profile'
      }
    }
  })
    .then(res => {
      success(res);
    });

}


export default user;
