import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.requestReddits();
    }
    
    render() {
        return(
            <div className="">
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    requestReddits: payload => dispatch(actions.requestReddits(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

