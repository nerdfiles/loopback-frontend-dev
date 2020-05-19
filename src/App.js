import React, {Component} from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Non-admin Pages
import Services from './pages/Services';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';

import Modal from './components/Modal';
import AdminWrapper from './components/AdminWrapper'
import LoginWrapper from './components/LoginWrapper'
import Login from './pages/Login';
import {connect} from 'react-redux';

// Admin Pages
import Dashboard from './pages/admin/Dashboard'
import Posts from './pages/admin/Posts'
import Users from './pages/admin/Users'

import portfolioModalImg1 from './assets/img/portfolio/01-full.jpg';

const modalList = [
  {
    id: 'portfolioModal1',
    projectName: 'Project Name',
    projectIntroText: 'Lorem ipsum dolor sit amet consectetur.',
    imgBlock: portfolioModalImg1,
    projectDescription: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
    listInline: () => {
      return (
        <ul className="list-inline">
            <li>Date: January 2020</li>
            <li>Client: Threads</li>
            <li>Category: Illustration</li>
        </ul>
      );
    }
  },
  {
    id: 'portfolioModal2',
    projectName: 'Project Name',
    projectIntroText: 'Lorem ipsum dolor sit amet consectetur.',
    imgBlock: portfolioModalImg1,
    projectDescription: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
    listInline: () => {
      return (
        <ul className="list-inline">
            <li>Date: January 2020</li>
            <li>Client: Threads</li>
            <li>Category: Illustration</li>
        </ul>
      );
    },
  },
  {
    id: 'portfolioModal3',
    projectName: 'Project Name',
    projectIntroText: 'Lorem ipsum dolor sit amet consectetur.',
    imgBlock: portfolioModalImg1,
    projectDescription: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
    listInline: () => {
      return (
        <ul className="list-inline">
            <li>Date: January 2020</li>
            <li>Client: Threads</li>
            <li>Category: Illustration</li>
        </ul>
      );
    }
  },
  {
    id: 'portfolioModal4',
    projectName: 'Project Name',
    projectIntroText: 'Lorem ipsum dolor sit amet consectetur.',
    imgBlock: portfolioModalImg1,
    projectDescription: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
    listInline: () => {
      return (
        <ul className="list-inline">
            <li>Date: January 2020</li>
            <li>Client: Threads</li>
            <li>Category: Illustration</li>
        </ul>
      );
    }
  },
  {
    id: 'portfolioModal5',
    projectName: 'Project Name',
    projectIntroText: 'Lorem ipsum dolor sit amet consectetur.',
    imgBlock: portfolioModalImg1,
    projectDescription: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
    listInline: () => {
      return (
        <ul className="list-inline">
            <li>Date: January 2020</li>
            <li>Client: Threads</li>
            <li>Category: Illustration</li>
        </ul>
      );
    }
  },
  {
    id: 'portfolioModal6',
    projectName: 'Project Name',
    projectIntroText: 'Lorem ipsum dolor sit amet consectetur.',
    imgBlock: portfolioModalImg1,
    projectDescription: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
    listInline: () => {
      return (
        <ul className="list-inline">
            <li>Date: January 2020</li>
            <li>Client: Threads</li>
            <li>Category: Illustration</li>
        </ul>
      );
    }
  }
];

class App extends Component {
  render() {
    return (
      <div className="App page-top">
        <Router>

          <Route path="/admin/users"
            render={props => {
              return (
                <>
                  {this.props.auth.token ?
                    (
                      <AdminWrapper>
                        <Users />
                      </AdminWrapper>
                    )
                    :
                    (
                      <LoginWrapper>
                        <Login />
                      </LoginWrapper>
                    )
                  }
                </>
              )
            }}
          />

          <Route path="/admin/posts"
            render={props => {
              return (
                <>
                  {this.props.auth.token ?
                    (
                      <AdminWrapper>
                        <Posts />
                      </AdminWrapper>
                    )
                    :
                    (
                      <LoginWrapper>
                        <Login />
                      </LoginWrapper>
                    )
                  }
                </>
              )
            }}
          />

          <Route 
            exact={true}
            path="/admin"
            render={props => {
              return (
                <>
                  {this.props.auth.token ?
                    (
                      <AdminWrapper>
                        <Dashboard />
                      </AdminWrapper>
                    )
                    :
                    (
                      <LoginWrapper>
                        <Login />
                      </LoginWrapper>
                    )
                  }
                </>
              )
            }}
          />

          <Route 
            exact={true}
            path="/"
            render={props => (
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          />

          <Route 
            path="/services" 
            render={props => (
              <PageWrapper>
                <Services {...props} />
              </PageWrapper>
            )}
          />

          <Route
            path="/portfolio"
            render={props => (
              <PageWrapper>
                <Portfolio {...props} />
              </PageWrapper>
            )}
          />

          <Route
            path="/about"
            render={props => (
              <PageWrapper>
                <About {...props} />
              </PageWrapper>
            )}
          />

          <Route
            path="/contact"
            render={props => (
              <PageWrapper>
                <Contact {...props} />
              </PageWrapper>
            )}
          />

          <Route
            path="/team"
            render={props => (
              <PageWrapper>
                <Team {...props} />
              </PageWrapper>
            )}
          />

        </Router>
        {
          modalList.map((modal, index) => {
            return <Modal {...modal} key={index} />
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
