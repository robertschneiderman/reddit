import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as dashboardActions from './dashboard/actions';

class Header extends Component {

  handleClick(feed) {
    this.props.changeFeed(feed);
  }

  renderLinks() {
    if (this.props.authenticated) {
        return (
          <li className="navbar-item" key={3}>
            <Link className="nav-link" to="/signout">Sign Out</Link>
          </li>
        );
    } else {
      return [
        <li className="navbar-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="navbar-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    let { feed } = this.props;
    let hotClassName = (feed === 'hot') ? 'nav-link-pill active' : 'nav-link-pill';
    let favClassName = (feed === 'favorites') ? 'nav-link-pill active' : 'nav-link-pill';
    return (
      <nav className="navbar">
        <div>
          <img className="img-logo" src="./static/images/reddit_lite_logo.svg" alt=""/>
        </div>
        <ul className="navbar-nav">
          <li className={hotClassName} onClick={this.handleClick.bind(this, 'hot')}>Hot</li>
          <li className={favClassName} onClick={this.handleClick.bind(this, 'favorites')}>Favorites</li>
        </ul>
        <ul className="navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    feed: state.dashboard.feed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeFeed: feed => dispatch(dashboardActions.changeFeed(feed))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);