import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Users />
    </div>
  );
}

export default App;
