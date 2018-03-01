import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './img/pexels-photo-894359.jpeg';

import Messages from './Messages.js';




class Chat extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      messages: [],
      chatID: 0
    };
 
    var messagesArray = this.state.messages;

    messagesArray.unshift({
      type: 0,
      text: "weee",
      chatID: 0
    });

    messagesArray.unshift({
      type: 1,
      text: "wee",
      chatID: 0
    });

    messagesArray.unshift({
      type: 0,
      text: "chatId = 1",
      chatID: 1
    });

    messagesArray.unshift({
      type: 1,
      text: "chatId = 1",
      chatID: 1
    });

    messagesArray.unshift({
      type: 0,
      text: "chatId = 1",
      chatID: 1
    });

    messagesArray.unshift({
      type: 1,
      text: "chatId = 1",
      chatID: 1
    });

    
    this.setState({
      messages: messagesArray,
      chatID: this.props.id
    });

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(e) {
    var messagesArray = this.state.messages;

    messagesArray.push({
      type: 1,
      text: this._inputElement1.value,
      chatID: this.props.id
    });

    this.setState({
      messages: messagesArray,
      chatID: this.props.id
    });

    this._inputElement1.value = "";

    e.preventDefault();
  }

  render() {



    return (
      <div className="right__part">
        <div className="right__contact">
          <div className="right__contact__info">
            <h6>{this.props.name}</h6>
            <p>online</p>
          </div>
        </div>
        <div className="chat">

          <div className="messages">
            <ul>
              <Messages entries={this.state.messages} chatID={this.props.id} />
            </ul>
          </div>

          <div className="message-input">
            <form className="wrap" onSubmit={this.sendMessage}>
              <input type="text" placeholder="Write your message..." ref={(a) => this._inputElement1 = a}/>
              <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
              <button type="submit" className="submitB"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Chat;
