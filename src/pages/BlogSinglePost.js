import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as SiteActions from '../actions/siteActions';
import Header from '../components/Header';
import CommentBuilder from '../common/CommentBuilder';


class BlogSinglePost extends Component {

  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.slug, this.props.auth.token);
  }

  render() {
    return (
      <>

        <Header 
          heading="Read up"
          subheading={this.props.site.post.title}
          mastheadButton="About Btn"
          showButton={false}
          mastheadButtonLink="#about"
        />

        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div dangerouslySetInnerHTML={{__html: this.props.site.post.content}}></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3>Comments</h3>
            {
              this.props.auth.token ?
                <CommentBuilder />
              : 
                <p>Need an account? <Link to="/signup">Sign up</Link></p>
            }
          </div>
        </div>


        <div className="row">
          {this.props.site.post.Comments && this.props.site.post.Comments.length > 0 ?
            this.props.site.post.Comments.map((comment, index) => {
              return (
                <div className="col-md-12">
                  <h4>{comment.user.Profile && comment.user.Profile[0] ? comment.user.Profile[0].name : null}</h4>
                  <p>{comment.content}</p>
                </div>
              );
            })
            : null
          }


        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  site: state.site
});

const mapDispatchToProps = dispatch => ({
  getSinglePost: (slug, token) => {
    dispatch(SiteActions.getPostBySlug(slug, token));
  }

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSinglePost);
