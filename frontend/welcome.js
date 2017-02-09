import React, {Component} from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="c-hl">
                <h1 className="hl">Welcome to Reddit Lite!</h1>
            </div>
        );
    }
}

export default Welcome;