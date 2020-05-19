import React, {Component} from 'react'
import {defaultCipherList} from 'constants';

class LoginWrapper extends Component {
  render() {
    return (
      <div id="admin-page">
        {this.props.children}
      </div>
    );
  }
}

export default LoginWrapper;
