import React, {Component} from 'react';
import TableView from '../../common/TableView';
import {connect} from 'react-redux';
import * as AdminActions from '../../actions/adminActions';

const columns = [
  {label: 'ID', name: 'id'},
  {label: 'Title', name: 'title'},

];


class Posts extends Component {

  componentDidMount() {
    this.props.getPosts(this.props.auth.token);
  }

  render() {
    const posts = this.props.admin.posts;
    return (
      <>
        <h1>Posts</h1>
        <TableView
          columns={columns}
          rows={posts}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    admin: state.admin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (token) => {
      dispatch(AdminActions.getPosts(token));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
