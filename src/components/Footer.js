import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as AuthActions from '../actions/authActions';


class Footer extends Component {

  render() {
    return (

        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                      {
                        this.props.auth.token ?
                          <a href="#logout" className="mr-3" onClick={e => {
                            e.preventDefault()
                            this.props.clearAuth()
                            localStorage.clear()
                          }}>Logout</a>
                        : null
                      }
                      {
                        !this.props.auth.token ?
                          <Link className="mr-3" to="/signup">Signup</Link>
                      : null
                      }
                      <Link className="mr-3" to="/admin">Admin</Link>
                      <br />
                      <a className="mr-3" href="#!">Privacy Policy</a>
                      <a href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>

    );
  }
}

const mapStateToProps = state => ({ 
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({ 
  clearAuth: () => {
    dispatch(AuthActions.clearAuth());

  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
