import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './img/pexels-photo-894359.jpeg';

import ChatList from './ChatList.js';
import Chat from './Chat.js';



class App extends Component {

  constructor() {
    super();
    this.state = { 
      id: 0
    };

    this.updateID= this.updateID.bind(this);
  }

  updateID(id) {
    this.setState({
      id: id
    });
  }

  render() {
    return ( 
      <div className="main">
        <ChatList updateID={this.updateID}  />
        <Chat id={this.state.id}/>
      </div>
    );
  }
}

export default App;
