import React from '../../../node_modules/react';
import PropTypes from 'prop-types';

const UserItems = ({user : {login, avatar_url, html_url}}) => {
    /* //we can declare state in the constructor as well as directly as done here
    state = {
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    } */

    //used data from the state
    //destructuring data from the state to increase code readibility
    // const { login, avatar_url, html_url } = this.state;

    //using data from props
    // const { login, avatar_url, html_url } = props.user;

    return (
        <div className="col mb-4">
            <div className="card h-100 p-3">
                <img src={avatar_url} className="rounded-circle mx-auto" alt="network issue" style={{ width: '60px' }} />
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <a href={html_url} className="btn btn-primary my-1 btn-sm">More</a>
                </div>
            </div>
        </div>
    )
}

UserItems.protoTypes = {
    user : PropTypes.object.isRequired,
}

export default UserItems;