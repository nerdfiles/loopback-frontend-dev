import React, { Component } from 'react';
import * as SiteActions from '../actions/siteActions';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import * as Yup from 'yup';


class CommentBuilder extends Component {
  render() {
    return (
      <>

        <form onSubmit={e => {
          e.preventDefault();
          const comment = {
            postId: this.props.site.post.id,
            profileId: this.props.auth.profile.id,
            userId: this.props.auth.user.id,
            content: this.props.values.content
          }
          this.props.postComment(comment, this.props.auth.token);
        }}>
          <textarea 
            id="content" 
            name="content" 
            value={this.props.values['content']}
            onChange={this.props.handleChange}
          />

          <button type="submit" className="btn btn-primary">Post</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  site: state.site
});

const mapDispatchToProps = dispatch => ({
  postComment: (comment, token) => {
    dispatch(SiteActions.postComment(comment, token));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: () => ({
    content: ''
  }),
  validationSchema: Yup.object().shape({
    content: Yup.string().required('Required')
  }),
  handleSubmit: (values, {setSubmitting}) => {
  }
})(CommentBuilder));

