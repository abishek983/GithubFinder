import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Navbar = ({icon,title}) => {
    /* // default props if no props is present this will be displayed
    static defaultProps = {
        title : "Github Finder",
        icon : "fab fa-github"
    };

    //setting the type of the props sent
    //if wrong prop sent it would show an error in the console
    static propTypes  ={
        title : PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired
    }; */

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <i className={icon}></i> <a className="navbar-brand" href="#">{title}</a>
        </nav>
    )
}

//default props and proptypes for functional component
Navbar.defaultProps = {
    title : "Github Finder",
    icon : "fab fa-github"
};

Navbar.propTypes  ={
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
};

export default Navbar;