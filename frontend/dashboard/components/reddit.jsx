import React, {Component} from 'react';
import moment from 'moment';
// import * as actions from '../actions';

class Reddit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    hoursAgo(timestamp) {
        // debugger;
        // return moment().get('date') * 24 + moment().get('hours') - moment(timestamp).get('date') + moment(timestamp).get('hours');
        return moment.utc(moment().diff(moment(timestamp))).format('HH');
    }

    toggleDropdown() {
        this.setState({dropdown: !this.state.dropdown});
    }

    renderDropDownBtn() {
        let { preview } = this.props;
        if (preview) {
            if (!this.state.dropdown)
                return <svg xmlns="http://www.w3.org/2000/svg" onClick={this.toggleDropdown} className="btn-media" viewBox="0 0 34.9 34.9"><path id="bg" d="M31.9 34.9h-29C1.3 34.9 0 33.6 0 32V3c0-1.7 1.3-3 2.9-3h29c1.6 0 2.9 1.3 2.9 2.9v29c.1 1.7-1.2 3-2.9 3z"/><path fill="#FFF" d="M7.8 8.7v17c0 2.2 2.4 3.6 4.3 2.5l14.8-8.5c1.9-1.1 1.9-3.9 0-5L12.1 6.2c-1.9-1.1-4.3.3-4.3 2.5zM32 27h-2c-.3 0-.5-.2-.5-.5v-2c0-.3-.2-.5-.5-.5h-1.3c-.3 0-.5.2-.5.5v2c0 .3-.2.5-.5.5h-2c-.3 0-.5.2-.5.5v1.3c0 .3.2.5.5.5h2c.3 0 .5.2.5.5v2c0 .3.2.5.5.5H29c.3 0 .5-.2.5-.5v-2c0-.3.2-.5.5-.5h2c.3 0 .5-.2.5-.5v-1.3c.1-.3-.2-.5-.5-.5z"/></svg>;
            else {
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.7 45.7" onClick={this.toggleDropdown} className="btn-media"><circle id="bg" className="btn-media" cx="22.8" cy="22.8" r="22.8"/><path fill="#FFF" d="M28.4 32.6L13 17.3c-1.2-1.2-1.2-3 0-4.2 1.2-1.2 3-1.2 4.2 0l15.4 15.3c1.2 1.2 1.2 3 0 4.2-1.1 1.2-3 1.2-4.2 0z"/><path fill="#FFF" d="M32.6 17.2L17.3 32.7c-1.2 1.2-3 1.2-4.2 0-1.2-1.2-1.2-3 0-4.2L28.4 13c1.2-1.2 3-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2z"/></svg>;            
            }
        }
    }

    handleStar(e, redditId) {
        // e.target
        debugger;
        this.props.createStar(redditId);
    }

    renderDropDown() {
        let { preview } = this.props;
        if (preview && this.state.dropdown) {    
            return <img className="img-dropdown" src={preview.images[0].source.url} />;
        }
    }
    
    render() {
        let { id, thumbnail, created_utc, title, link_flair_text, num_comments, domain, author, subreddit } = this.props;
        thumbnail = (thumbnail === 'self' || thumbnail === 'default') ? './static/images/self.png' : thumbnail;
        return(
            <div className="reddit c-reddit">
                <div className="btn-star">
                    <svg className="icon" onClick={(e) => this.handleStar(e, id)} viewBox="-6.9 -13.1 40 40"><path class="shape" fill="#ddd" d="M20.7-7.2c-5.8 0-7.6 4.3-7.6 4.3s-1.8-4.3-7.6-4.3S-2.9-3.5-2.9.9c0 2.2 1.8 5.2 3.6 7.3C2.5 10.3 13.1 20.6 13.1 21c0-.4 10.6-10.7 12.4-12.7 1.8-2 3.6-5 3.6-7.3 0-4.4-2.7-8.2-8.4-8.2z" /></svg>
                </div>
                <div className="main-reddit fb">
                    <img src={thumbnail} alt="" className="img-tn"/>
                    <div className="text-wrapper">
                        <h3 className="title">{title} <span className="tstyle-box">{link_flair_text}</span> <a className="link">({domain})</a></h3>
                        <div className="below-title fb">
                            {this.renderDropDownBtn()}
                            <div className="side-of-media-btn">
                                <p className="subtitle">submitted {this.hoursAgo(created_utc)} hours ago by <a className="link-regular mr05">{author}</a>  to /r/{subreddit}</p>
                                <div className="meta-data">
                                    <a href="" className="link-comments link-reddit">{num_comments} comments</a>
                                    <a href="" className="link-share link-reddit">share</a>
                                </div>
                            </div>
                        </div>
                        {this.renderDropDown()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Reddit;