import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter, Link as RouterLink} from 'react-router-dom'

import Header from '../components/Header';
import * as SiteActions from '../actions/siteActions';
import BlogItem from '../common/BlogItem';


class Blog extends Component {

  componentDidMount() {
    this.props.getPosts(0);
    this.props.getPostCount();
  }

  render() {
    return (
      <>

        <Header 
          subheading="Read up"
          heading="Blog"
          mastheadButton="About Btn"
          showButton={false}
          mastheadButtonLink="#about"
        />


        <section className="bg-light">

          <div className="container">
            <div className="row">
              {this.props.site.posts.length ?
                this.props.site.posts.map((post, index) => {
                  return (
                    <BlogItem 
                      key={index}
                      post={post}
                    />
                  )
                })
                : null
              }
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  {this.props.site.postCount.count > this.props.site.posts.length ?
                    <button 
                      onClick={e => {
                        const skip = this.props.site.posts.length;
                        this.props.getPosts(skip);
                      }}
                      className="btn btn-default"
                    >Load More</button>
                  : null}
                </div>
              </div>
            </div>

          </div>

        </section>

      </>
    );
  }
}

const mapStateToProps = state => ({
  site: state.site
})

const mapDispatchToProps = dispatch => ({
  getPosts: (skip) => {
    dispatch(SiteActions.getPosts(skip));
  },

  getPostCount: () => {
    dispatch(SiteActions.getPostCount());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Blog));
