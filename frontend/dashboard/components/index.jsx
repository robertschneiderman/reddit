import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reddit from './reddit';
import * as redditsActions from '../../reddit/actions';
import * as starsActions from '../../star/actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.renderReddits = this.renderReddits.bind(this);
    }

    componentWillMount() {
        this.props.requestReddits();
    }

    renderReddits() {
        let { createLike } = this.props;
        return this.props.reddits.slice(0, 5).map((reddit, i) => {
            return <Reddit key={reddit.id} {...reddit.data} createLike={createLike} />;
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
    requestReddits: () => dispatch(redditsActions.requestReddits()),
    createLike: () => dispatch(starsActions.createStar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

