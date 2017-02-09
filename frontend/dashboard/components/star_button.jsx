import React, {Component} from 'react';
class StarButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.handleStar = this.handleStar.bind(this);
    }

    componentWillMount() {
        let { redditId, stars } = this.props;
        debugger;
        let redditIds = stars.map(star => star.redditId);
        if (redditIds.includes(redditId)) this.setState({active: true});
    }

    handleStar(e, redditId) {
        // debugger;
        if (!this.state.active) {
            e.target.classList.add('heat-animation');
            this.setState({active: true});
            this.props.createStar(redditId);
        } else {
            this.props.deleteStar(redditId);
        }
    }    

    render() {
        let { redditId, stars } = this.props;
        let style = this.state.active ? {fill: 'rgba(232, 56, 56, 1)'} : {};
        return(
            <div className="btn-star">
                <svg className="icon" onClick={(e) => this.handleStar(e, redditId)} style={style} viewBox="-6.9 -13.1 40 40"><path className="shape" d="M20.7-7.2c-5.8 0-7.6 4.3-7.6 4.3s-1.8-4.3-7.6-4.3S-2.9-3.5-2.9.9c0 2.2 1.8 5.2 3.6 7.3C2.5 10.3 13.1 20.6 13.1 21c0-.4 10.6-10.7 12.4-12.7 1.8-2 3.6-5 3.6-7.3 0-4.4-2.7-8.2-8.4-8.2z" /></svg>
            </div>
        );
    }
}

export default StarButton;