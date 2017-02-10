import React, {Component} from 'react';
import {connect} from 'react-redux';
import Reddit from './reddit';
import * as redditsActions from '../../reddit/actions';
import * as starsActions from '../../star/actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.renderAllReddits = this.renderAllReddits.bind(this);
        this.renderStarredReddits = this.renderStarredReddits.bind(this);
    }

    componentWillMount() {
        this.props.requestReddits();
        this.props.requestStars();
    }

    renderAllReddits() {
        let { createStar, deleteStar, stars } = this.props;
        return this.props.reddits.slice(0, 5).map((reddit, i) => {
            let starred;
            if (stars.includes(reddit.data.id)) starred = true;
            return <Reddit key={reddit.data.id} starred={starred} {...reddit} createStar={createStar} deleteStar={deleteStar} />;
        });
    }

    renderStarredReddits() {
        debugger;
        let { createStar, deleteStar, stars } = this.props;
        let starredReddits = this.props.reddits.filter(reddit => {
            return stars.includes(reddit.data.id);
        });
        return starredReddits.slice(0, 5).map((reddit, i) => {
            return <Reddit key={reddit.data.id} starred={true} {...reddit} createStar={createStar} deleteStar={deleteStar} />;
        });
    }    
    
    render() {
        let renderRedits = (this.props.dashboard.feed === 'hot') ? this.renderAllReddits : this.renderStarredReddits;
        return(
            <div className="dashboard">
                {renderRedits()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { reddit, star, dashboard } = state;
    return {
        dashboard,
        reddits: reddit,
        stars: star
    };
};

const mapDispatchToProps = dispatch => ({
    requestReddits: () => dispatch(redditsActions.requestReddits()),
    requestStars: () => dispatch(starsActions.requestStars()),
    createStar: redditId => dispatch(starsActions.createStar(redditId)),
    deleteStar: redditId => dispatch(starsActions.deleteStar(redditId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

