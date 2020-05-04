import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

class Navbar extends Component {
    // default props if no props is present this will be displayed
    static defaultProps = {
        title : "Github Finder",
        icon : "fab fa-github"
    };

    //setting the type of the props sent
    //if wrong prop sent it would show an error in the console
    static propTypes  ={
        title : PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired
    };


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <i className={this.props.icon}></i> <a className="navbar-brand" href="#">{this.props.title}</a>
            </nav>
        )
    }
}

export default Navbar;