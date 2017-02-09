import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Signout extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return(
      <div className="c-hl">
        <h1 className="hl">Sorry to see you go...</h1>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);