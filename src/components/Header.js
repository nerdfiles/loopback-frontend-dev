import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">{this.props.subheading}</div>
          <div className="masthead-heading text-uppercase">{this.props.heading}</div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" 
            href={this.props.mastheadButtonLink}
          >{this.props.mastheadButton}</a>
        </div>
      </header>
    );
  }

}

export default Header;
