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
        this.props.requestStars();
    }

    renderReddits() {
        let { createStar, deleteStar, stars } = this.props;
        return this.props.reddits.slice(0, 5).map((reddit, i) => {
            let starred;
            if (stars.includes(reddit.data.id)) starred = true;
            return <Reddit key={reddit.data.id} starred={starred} {...reddit} createStar={createStar} deleteStar={deleteStar} />;
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
    let { reddit, star } = state;
    return {
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

