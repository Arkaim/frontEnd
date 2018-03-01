import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './img/pexels-photo-894359.jpeg';


class Messages extends Component {

  constructor(props, context) {
    super(props, context);
 
    this.createMessageList = this.createMessageList.bind(this);
  }

  createMessageList(message) {

    var chatID = this.props.chatID;
    var messageText = message.text;

    if (message.chatID === chatID) {
      if (message.type === 0) {
        return (
          <li className="sent">
            <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
            <p>{messageText}</p>
          </li>
        );
      }

      else {
        return (
          <li className="replies">
            <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
            <p>{messageText}</p>
          </li>
        );
      }
    }
  }
    

  render() {

    var messages = this.props.entries;
    var allMessages = messages.map(this.createMessageList);

    return (
      <div>
        {allMessages}
      </div>
    );
    
  }
}

export default Messages;
