import React, { Component } from 'react';
import Header from '../components/Header';
import {withFormik} from 'formik';
import * as Yup from 'yup';


class Contact extends Component {
  render() {
    return (
      <>

        <section 
          className="page-section"
          id="contact"
        >
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>

                <form 
                  id="contactForm" 
                  onSubmit={this.props.handleSubmit}
                  name="sentMessage" 
                  noValidate="novalidate"
                >
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">

                                <input 
                                  className="form-control"
                                  id="name"
                                  type="text"
                                  placeholder="Your Name *"
                                  required="required"
                                  name="name"
                                  value={this.props.values['name']}
                                  onChange={this.props.handleChange}
                                  data-validation-required-message="Please enter your name."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">

                                <input
                                  className="form-control"
                                  id="email"
                                  type="email"
                                  name="email"
                                  placeholder="Your Email *"
                                  required="required"
                                  value={this.props.values['email']}
                                  onChange={this.props.handleChange}
                                  data-validation-required-message="Please enter your email address."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">

                                <input
                                  className="form-control"
                                  id="phone"
                                  name="phone"
                                  type="tel"
                                  placeholder="Your Phone *"
                                  required="required"
                                  value={this.props.values['phone']}
                                  onChange={this.props.handleChange}
                                  data-validation-required-message="Please enter your phone number."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">

                                <textarea
                                  className="form-control"
                                  id="message"
                                  name="message"
                                  placeholder="Your Message *"
                                  value={this.props.values['message']}
                                  onChange={this.props.handleChange}
                                  onBlur={this.props.handleBlur}
                                  required="required"
                                  data-validation-required-message="Please enter a message."
                                />
                                {(this.props.errors['message']) && <p className="help-block text-danger">{this.props.errors['message']}</p>}
                                // <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button 
                          className="btn btn-primary btn-xl text-uppercase"
                          id="sendMessageButton"
                          type="submit"
                        >
                          Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>

      </>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: ''
  }),
  // validate: values => {
  //   const errors = {}
  //   Object.keys(values).map(v => {
  //     if (!values[v] ) {
  //       errors[v] = 'Required';
  //     }
  //   })
  //
  //   return errors;
  // },
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, 'Min not met').required('Please enter a name'),
    email: Yup.string().email('Valid email plz').required(),
    phone: Yup.string().min(10, 'Min').max(15, 'Max').required('Need sum phone'),
    message: Yup.string().required('Error time')
  }),
  handleSubmit: (values, {setSubmitting}) => {
    console.log({values})
    alert('Submitted')
  }
})(Contact);
