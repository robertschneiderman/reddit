import React, {Component} from 'react';
import moment from 'moment';
// import * as actions from '../actions';

class Reddit extends Component {
    constructor(props) {
        super(props);
    }

    hoursAgo(timestamp) {
        // debugger;
        // return moment().get('date') * 24 + moment().get('hours') - moment(timestamp).get('date') + moment(timestamp).get('hours');
        return moment.utc(moment().diff(moment(timestamp))).format('HH');
    }
    
    render() {
        let { thumbnail, created_utc, title, link_flair_text, num_comments, domain, author, subreddit } = this.props;
        thumbnail = (thumbnail === 'self' || thumbnail === 'default') ? './static/images/self.png' : thumbnail;
        return(
            <div className="reddit c-reddit">
                <div className="like-btn"></div>
                <div className="main-reddit fb">
                    <img src={thumbnail} alt="" className="img-tn"/>
                    <div className="text-wrapper">
                        <h3 className="title">{title} <span className="tstyle-box">{link_flair_text}</span> <a className="link">({domain})</a></h3>
                        <div className="below-title fb">
                            <svg xmlns="http://www.w3.org/2000/svg" className="btn-media" viewBox="0 0 34.9 34.9"><path d="M31.9 34.9h-29C1.3 34.9 0 33.6 0 32V3c0-1.7 1.3-3 2.9-3h29c1.6 0 2.9 1.3 2.9 2.9v29c.1 1.7-1.2 3-2.9 3z"/><path fill="#FFF" d="M7.8 8.7v17c0 2.2 2.4 3.6 4.3 2.5l14.8-8.5c1.9-1.1 1.9-3.9 0-5L12.1 6.2c-1.9-1.1-4.3.3-4.3 2.5zM32 27h-2c-.3 0-.5-.2-.5-.5v-2c0-.3-.2-.5-.5-.5h-1.3c-.3 0-.5.2-.5.5v2c0 .3-.2.5-.5.5h-2c-.3 0-.5.2-.5.5v1.3c0 .3.2.5.5.5h2c.3 0 .5.2.5.5v2c0 .3.2.5.5.5H29c.3 0 .5-.2.5-.5v-2c0-.3.2-.5.5-.5h2c.3 0 .5-.2.5-.5v-1.3c.1-.3-.2-.5-.5-.5z"/></svg>
                            <div className="side-of-media-btn">
                                <p className="subtitle">submitted {this.hoursAgo(created_utc)} hours ago by <a className="link-regular mr05">{author}</a>  to /r/{subreddit}</p>
                                <div className="meta-data">
                                    <a href="" className="link-comments link-reddit">{num_comments} comments</a>
                                    <a href="" className="link-share link-reddit">share</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reddit;