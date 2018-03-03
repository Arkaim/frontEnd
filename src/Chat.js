import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './img/pexels-photo-894359.jpeg';
import img2 from './img/back.jpg';

import Messages from './Messages.js';




class Chat extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      messages: [],
      chatID: 0,
      editing: false,
      editingMsg: "",
      searching: false
    };
 
    var messagesArray = this.state.messages;

    messagesArray.unshift({
      type: 0,
      text: "hello",
      chatID: 0,
      msgID: 0,
      toShow: true
    });

    messagesArray.unshift({
      type: 1,
      text: "hi",
      chatID: 0,
      msgID: 1,
      toShow: true
    });

    messagesArray.unshift({
      type: 0,
      text: "whats up?",
      chatID: 0,
      msgID: 6,
      toShow: true
    });

    messagesArray.unshift({
      type: 1,
      text: "im good",
      chatID: 0,
      msgID: 7,
      toShow: true
    });

    messagesArray.unshift({
      type: 0,
      text: "hey bro",
      chatID: 1,
      msgID: 2,
      toShow: true
    });

    messagesArray.unshift({
      type: 1,
      text: "wow",
      chatID: 1,
      msgID: 3,
      toShow: true
    });

    messagesArray.unshift({
      type: 0,
      text: "wohoo",
      chatID: 1,
      msgID: 4,
      toShow: true
    });

    messagesArray.unshift({
      type: 1,
      text: "lolol",
      chatID: 1,
      msgID: 5,
      toShow: true
    });

    
    
    this.setState({
      messages: messagesArray,
      chatID: this.props.id
    });

    this.sendMessage = this.sendMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.searchMessageActivate = this.searchMessageActivate.bind(this);
    this.searchMessages = this.searchMessages.bind(this);
  }

  sendMessage(e) {


    if (!this.state.editing) {
      var messagesArray = this.state.messages;

      if (this._inputElement1.value !== "") {

        messagesArray.push({
          type: 1,
          text: this._inputElement1.value,
          chatID: this.props.id,
          msgID: Date.now(),
          toShow: true
        });

        if (this._inputElement1.value[0] === '!') {
          messagesArray.push({
            type: 0,
            text: this._inputElement1.value + "???"   ,
            chatID: this.props.id,
            msgID: Date.now(),
            toShow: true
          });
        }

        this.setState({
          messages: messagesArray,
          chatID: this.props.id
        });
      }

      this._inputElement1.value = "";
    }

    else{
      var messagesArray = this.state.messages;

      if (this._inputElement1.value === "") {
        this.deleteMessage(this.state.editingMsg.msgID);

        this.setState({
          editing: false
        });
      }

      else {
        this.state.editingMsg.text = this._inputElement1.value;

        this.setState({
          editing: false
        });
      }

      this._inputElement1.value = "";
    }
    

    e.preventDefault();
  }

  searchMessageActivate() {
    this.setState({
        searching: !this.state.searching
    });
  }

  searchMessages() {
    //console.log(this._inputElement2.value);

    var messagesArray = this.state.messages;

    for (var i = 0; i < messagesArray.length; i++) {
      messagesArray[i].toShow = true;
    }

    for (var i = 0; i < messagesArray.length; i++) {
      if (!messagesArray[i].text.startsWith(this._inputElement2.value)) {
        messagesArray[i].toShow = false;
      }
    }

    this.setState({
      messages: messagesArray
    });
  }

  editMessage(msg) {
    this.state.editing = true;
    this.state.editingMsg = msg;
    this._inputElement1.value = msg.text;
  }

  deleteMessage(msgID) {
    var filteredMessages = this.state.messages.filter(function (msg) {
      return (msg.msgID !== msgID);
    });

    this.setState({
      messages: filteredMessages
    });
  }

  render() {

    var inputDiv;
    //console.log(this.state.searching);

    if (this.state.searching) {

      inputDiv = (
        <input type="text" className="searchMsg" placeholder="Search" 
                    aria-label="Username" aria-describedby="basic-addon1" 
                    onChange={() => this.searchMessages()} ref={(b) => this._inputElement2 = b}></input>
      );
    }

    else {
      inputDiv = (
        <div></div>
      );
    }

    

    return (
      
      <div className="right__part">
        <div className="right__contact">
          <div className="right__contact__info">
            <h6>{this.props.name}</h6>
            <p>online</p>
            <i className="fa fa-search" onClick={() => this.searchMessageActivate()}></i>
            {inputDiv}
          </div>
        </div>
        <div className="chat">

          <div className="messages">
            <ul>
              <Messages entries={this.state.messages} 
                        chatID={this.props.id}
                        delete={this.deleteMessage}
                        editMessage={this.editMessage}
                        style={this.state.style} />
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
