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
      id: 0, 
      name: "Emma Watson"
    };

    this.updateID= this.updateID.bind(this);
  }

  updateID(id, name) {
    this.setState({
      id: id,
      name: name
    });
  }

  render() {
    return ( 
      <div className="main">
        <ChatList updateID={this.updateID}  />
        <Chat id={this.state.id} name={this.state.name}/>
      </div>
    );
  }
}

export default App;
