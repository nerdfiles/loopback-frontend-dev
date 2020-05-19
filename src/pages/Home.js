import React, {Component} from 'react';
import Header from '../components/Header';

class Home extends Component {
  componentDidMount() {
    console.log('mounted home')

  }

  render() {

    return (
      <>
        <Header 
          subheading="Home Subheading"
          heading="Home Heading"
          mastheadButton="Home Btn"
          mastheadButtonLink="#home"
        />

        <div id="home">
          <h1>Home</h1>
        </div>
      </>
    );
  }
}

export default Home;
