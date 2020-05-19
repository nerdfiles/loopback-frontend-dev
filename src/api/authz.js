import axios from 'axios'


const host = 'http://localhost:8080';

const authz = {
  noop: noop
};

function noop() {
}


export default authz;
