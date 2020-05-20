import React, {Component} from 'react'
import {withFormik} from 'formik'
import * as Yup from 'yup';
import {connect} from 'react-redux';

import * as AuthActions from '../actions/authActions';
import '../assets/css/admin.css';


class Signup extends Component {
  constructor(props) {
    super(props)
    // unset persisted error
    props.auth.error = null;
  }
  render() {
    return (
      <>

        <div className="signup-page">
          <div className="container">
            <div className="signup-form">

              <div className="row">
                <h1>Signup</h1> 
              </div>

              <form 
                id="signupForm"
                onSubmit={
                  e => {
                    e.preventDefault()
                    this.props.register(
                      this.props.values.username,
                      this.props.values.email,
                      this.props.values.password
                    )
                  }
                }
                name="registerStart"
                noValidate="novalidate"
              >
                
                <div className="row">

                  <div className="col-md-12">
                    <input 
                      id="email"
                      name="email"
                      type="email"
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
                      id="username"
                      name="username"
                      type="text"
                      value={this.props.values['username']}
                      onChange={this.props.handleChange}
                      onBlur={this.props.handleBlur}
                      touched={(''+this.props.touched['username'])}
                      errors={this.props.errors['username']}
                    />

                    {
                      this.props.touched['username'] && 
                      this.props.errors['username'] && 
                      <p>{this.props.errors['username']}</p>
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
                    <input 
                      id="confirmPassword"
                      name="confirmPassword"
                      type="confirmPassword"
                      value={this.props.values['confirmPassword']}
                      onChange={this.props.handleChange}
                      onBlur={this.props.handleBlur}
                      touched={(''+this.props.touched['confirmPassword'])}
                      errors={this.props.errors['confirmPassword']}
                    />

                    {
                      this.props.touched['confirmPassword'] && 
                      this.props.errors['confirmPassword'] && 
                      <p>{this.props.errors['confirmPassword']}</p>
                    }
                  </div>

                  <div className="col-md-12">
                    
                        <p className="text-danger text-center">
                          {this.props.auth.error || ''}
                        </p>

                    <button className="btn btn-primary">
                      Signup
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
    register: (username, email, pass) => {
      dispatch(AuthActions.register(username, email, pass));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: () => ({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Valid email').required('Required'),
    username: Yup.string().required('Required'),
    password: Yup.string().min(8, 'Min 8 chars').required('Required'),
    confirmPassword: Yup.string().required('Required').test('pass-match', 'Passwords do not match', function(value) {
      const {password} = this.parent;
      return password === value
    })
  }),
  handleSubmit: (values, {setSubmitting}) => {
    console.log({values});
  }
})(Signup));
