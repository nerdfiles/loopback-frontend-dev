import React, {Component} from 'react'
import {withFormik} from 'formik'
import * as Yup from 'yup';
import {connect} from 'react-redux';

import * as AuthActions from '../actions/authActions';
import '../assets/css/admin.css';


class Login extends Component {
  render() {
    return (
      <>

        <div className="login-page">
          <div className="container">
            <div className="login-form">

              <div className="row">
                <h1>Login</h1> 
              </div>

              <form 
                id="loginForm"
                onSubmit={
                  e => {
                    e.preventDefault()
                    this.props.login(this.props.values.email, this.props.values.password)
                  }
                }
                name="loginStart"
                noValidate="novalidate"
              >
                
                <div className="row">

                  <div className="col-md-12">
                    <input 
                      id="email"
                      name="email"
                      type="text"
                      value={this.props.values['email']}
                      onChange={this.props.handleChange}
                      onBlur={this.props.handleBlur}
                      touched={(''+this.props.touched['email'])}
                      errors={this.props.errors['email']}
                    />

                    {
                      this.props.touched['email'] && 
                      this.props.errors['email'] && 
                      <p>{this.props.errors['email']}</p>
                    }
                  </div>

                  <div className="col-md-12">
                    <input 
                      id="password"
                      name="password"
                      type="password"
                      value={this.props.values['password']}
                      onChange={this.props.handleChange}
                      onBlur={this.props.handleBlur}
                      touched={(''+this.props.touched['password'])}
                      errors={this.props.errors['password']}
                    />

                    {
                      this.props.touched['password'] && 
                      this.props.errors['password'] && 
                      <p>{this.props.errors['password']}</p>
                    }
                  </div>

                  <div className="col-md-12">
                    <button className="btn btn-primary">
                      Login
                    </button>

                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </>
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
    login: (email, pass) => {
      dispatch(AuthActions.login(email, pass));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Valid email').required('Required'),
    password: Yup.string().required('Required')
  }),
  handleSubmit: (values, {setSubmitting}) => {
    console.log({values});
    //login(values.email, values.password);
  }
})(Login));
