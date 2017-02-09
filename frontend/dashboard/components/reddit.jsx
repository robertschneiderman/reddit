import React, {Component} from 'react';
import moment from 'moment';
// import * as actions from '../actions';

class Reddit extends Component {
    constructor(props) {
        super(props);
    }

    hoursAgo(timestamp) {
        return moment().get('hours') - moment(timestamp).get('hours');
    }
    
    render() {
        let { thumbnail, title, link_flair_text, num_comments, domain, author, subreddit } = this.props;
        thumbnail = (thumbnail === 'self' || thumbnail === 'default') ? './static/images/self.png' : thumbnail;
        return(
            <div className="reddit c-reddit">
                <div className="like-btn"></div>
                <div className="main-reddit fb">
                    <img src={thumbnail} alt="" className="img-tn"/>
                    <div className="text-wrapper">
                        <h3 className="title">{title} <span className="tstyle-box">{link_flair_text}</span> <a className="link">({domain})</a></h3>
                        <div className="below-title fb">
                            <img src="" className="btn-media" />
                            <div className="side-of-media-btn">
                                <p className="subtitle-reddit">submitted fillin hours ago by <a class="link-regular">{author}</a>  to /r/{subreddit}</p>
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