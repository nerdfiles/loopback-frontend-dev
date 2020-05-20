import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as SiteActions from '../actions/siteActions';
import Header from '../components/Header';


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
