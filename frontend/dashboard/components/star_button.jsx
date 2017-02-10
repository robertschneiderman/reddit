import React, {Component} from 'react';
class StarButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            starId: null
        };
        this.handleStar = this.handleStar.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // let { redditId, stars } = this.props;
        // if (nextProps.star)
        // debugger;
        // let starIds = nextProps.stars.map(star => star.star.id);
        // starIds.forEach(starId => {
        //     if (starId === this.state.starId) foundStarId = 
        // })
        // if (!starIds.includes(this.state.starId)) {
        //     this.setState({active: false, starId: null});
        // } else {
        //     this.setState({active: true, starId: null});
        // }
    }    

    handleStar(e, redditId) {
                // debugger;

        if (!this.props.starred) {
            e.target.classList.add('heat-animation');
            this.props.createStar(redditId);
        } else {
            this.props.deleteStar(redditId);
        }
    }    

    render() {
        let { redditId, stars } = this.props;

        let style = this.props.starred ? {fill: 'rgba(232, 56, 56, 1)'} : {};
        return(
            <div className="btn-star">
                <svg className="icon" onClick={(e) => this.handleStar(e, redditId)} style={style} viewBox="-6.9 -13.1 40 40"><path className="shape" d="M20.7-7.2c-5.8 0-7.6 4.3-7.6 4.3s-1.8-4.3-7.6-4.3S-2.9-3.5-2.9.9c0 2.2 1.8 5.2 3.6 7.3C2.5 10.3 13.1 20.6 13.1 21c0-.4 10.6-10.7 12.4-12.7 1.8-2 3.6-5 3.6-7.3 0-4.4-2.7-8.2-8.4-8.2z" /></svg>
            </div>
        );
    }
}

export default StarButton;