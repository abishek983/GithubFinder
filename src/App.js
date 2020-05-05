import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';

class App extends Component {
  //we are not using any store management tool so getting the data from here
  state = {
    users : [],
    loading : false,
    alert : null
  }

  async componentDidMount(){
    this.setState({loading : true});
    //we can also use the api without client ID and secret key
    // console.log(process.env.GITHUB_CLIENT_SECRET_KEY);
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&clientz-secret=${process.env.GITHUB_CLIENT_SECRET_KEY}`)
    this.setState({loading : false});
    this.setState({users : res.data});
  }

  //Search Github Users
  searchUsers = async(text) =>{
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    // console.log(res.data);
    this.setState({loading : false});
    this.setState({users : res.data.items});
  }

  alert = (msg) =>{
    this.setState({alert : {msg}})
    setTimeout(() => this.setState({alert : null}),2000)

  }  

  render() {
    return (
      <div className="App">
        <Navbar />
          <div className="container">
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers} alert={this.alert}/>
          <Users users={this.state.users} loading={this.state.loading} searchUsers={this.searchUsers}/>
        </div>
      </div>
    );
  }
}


export default App;
