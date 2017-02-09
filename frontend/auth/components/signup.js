import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import store from '../../store.js';

import { validate, renderField } from '../helpers';

const handleFormSubmit = ({ email, password }) => {
  actions.signupUser({ email, password})(store.dispatch);
};

class Signup extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className="heading">Sign Up</h2>
        <div className="fieldset">
          <Field 
            name="email"
            type="text"
            label="Email"
            component={renderField} />
        </div>
        
        <div className="fieldset">
          <Field 
            name="password" 
            label="Password" 
            type="password" 
            component={renderField} />
        </div>

        <div className="fieldset">
          <Field 
            name="confirmPassword" 
            type="password" 
            label="Confirm Password"            
            component={renderField} />
        </div>
        
        <button className="btn btn-primary" action="submit">Sign up</button>    
      </form>
    );
  }

}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

let signUpForm = reduxForm({
  form: 'signup',
  validate  
})(Signup);

export default signUpForm = connect(mapStateToProps, actions)(signUpForm);
