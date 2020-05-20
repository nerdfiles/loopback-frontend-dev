import React, {Component} from 'react';
import TableView from '../../common/TableView';
import {connect} from 'react-redux';
import * as AdminActions from '../../actions/adminActions';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {withStyles} from '@material-ui/core/styles';
import {Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'


const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: '50px',
    right: '50px'
  }
});

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
    const {classes} = this.props;
    return (
      <>
        <h1>Posts</h1>
        <TableView
          columns={columns}
          rows={posts}
        />

        <Fab 
          component={RouterLink}
          to="/admin/posts/add"
          colors="secondary"
          aria-label="Add"
          className={classes.fab} 
        >
          <EditIcon />
        </Fab>
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
)(withStyles(styles)(Posts));
