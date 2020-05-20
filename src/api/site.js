import axios from 'axios'


const host = 'http://localhost:8080';
const modelName = 'Posts';

const site = {
  getPosts: getPosts,
  getPostCount: getPostCount,
  getPostBySlug: getPostBySlug
};

/**
 * getPostCount
 *
 * @param success
 */
function getPostCount(success) {
  axios.get(`${host}/api/${modelName}/count`)
    .then(res => {
      success(res);
    });
}

/**
 * getPostBySlug
 *
 * @param slug
 * @param token
 * @param success
 */
function getPostBySlug(slug, token, success) {
  axios.get(`${host}/api/${modelName}/findOne?access_token=${token}`, {
    params: {
      filter: {
        where: { slug: slug },
        include: {Comments: { user: 'Profile'} }
      }
    }
  })
    .then(res => {
      success(res);
    });
}

/**
 * getPosts
 *
 * @param skip
 * @param success
 */
function getPosts(skip, success) {
  axios.get(`${host}/api/${modelName}`, {
    params: {
      filter: {
        skip: skip,
        limit: 10,
        include: 'PostImage',
        field: {
          id: true,
          title: true,
          slug: true,
          content: false
        }
      }
    }
  })
    .then(res => {
      success(res);
    });
};


export default site
