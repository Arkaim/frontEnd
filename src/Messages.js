import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './img/pexels-photo-894359.jpeg';


class Messages extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      editing: false
    };
 
    this.createMessageList = this.createMessageList.bind(this);
    this.edit = this.edit.bind(this);
  }

  createMessageList(message) {


    var chatID = this.props.chatID;
    var messageText = message.text;

    if (message.toShow){
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
            <li className="replies" onDoubleClick={() => this.edit(message)}>
              <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
              <p>{messageText}</p>
            </li>
          );
        }
      }
    }

    else {
      return;
    }
    
  }

  edit(msg) {
    this.props.editMessage(msg);
  }

  delete(msgID) {
    this.props.delete(msgID);
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
