import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reddit from './reddit';
import * as redditsActions from '../../reddit/actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.renderReddits = this.renderReddits.bind(this);
    }

    componentWillMount() {
        this.props.requestReddits();
    }

    renderReddits() {
        return this.props.reddits.map((reddit, i) => {
            return <Reddit key={reddit.id} {...reddit.data} />;
        });
    }
    
    render() {
        return(
            <div className="dashboard">
                {this.renderReddits()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { reddit } = state;
    return {
        reddits: reddit
    };
};

const mapDispatchToProps = dispatch => ({
    requestReddits: () => dispatch(redditsActions.requestReddits())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

