import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  //we are not using any store management tool so getting the data from here
  state = {
    users : [],
    loading : false
  }

  async componentDidMount(){
    this.setState({loading : true});
    const res = await axios.get('https://api.github.com/users')
    this.setState({users : res.data});
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users users={this.state.users} />
      </div>
    );
  }
}


export default App;
