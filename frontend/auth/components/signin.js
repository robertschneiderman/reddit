import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import store from '../../store.js';

import { validate2, renderField } from '../helpers';

const handleFormSubmit = ({ email, password }) => {
  actions.signinUser({ email, password })(store.dispatch);
};

class Signin extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className="heading">Sign In</h2>
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
        
        <button className="btn btn-primary" action="submit">Sign in</button>    
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

let signInForm = reduxForm({
  form: 'signin',
  validate2
})(Signin);

export default signInForm = connect(mapStateToProps, actions)(signInForm);

