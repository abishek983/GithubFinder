import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        alert: PropTypes.func.isRequired,
    }

    submit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.alert('Please Enter a valid name to seacrh');
        }
        else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }

    textChanged = (e) => {
        this.setState({ text: e.target.value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submit} className="from-inline my-2 my-lg-0">
                    <input type="text" name="text" className="form-control mr-sm-2 my-2" placeholder="Search..."
                        value={this.state.text}
                        onChange={this.textChanged} />
                    <button className="btn btn-outline-success my-2" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search
