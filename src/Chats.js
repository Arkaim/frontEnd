import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './img/pexels-photo-894359.jpeg';


class Chats extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      chatID: 0
    };
 
    this.createChatList = this.createChatList.bind(this);
    this.changeID = this.changeID.bind(this);
  }


  createChatList(chat) {

    var chatName;
    var lastSeenTime;
    var lastMsgSent;
    var chatType = chat.type;

    if(chat.type === 0) {
      var fname = chat.fname;
      var lname = chat.lname;
      var username = chat.username;
      var phone = chat.phone;
      var image = chat.image;
      var lastmsgtime = chat.lastmsgtime;
      var lastmsg = chat.lastmsg;

      chatName = fname + " " + lname;
      lastSeenTime = lastmsgtime;
      lastMsgSent = lastmsg;
    }

    else if(chat.type === 1) {
      var groupName = chat.groupName;
      var image = chat.image;
      var lastmsgtime = chat.lastmsgtime;
      var lastmsg = chat.lastmsg;

      chatName = groupName;
      lastSeenTime = lastmsgtime;
      lastMsgSent = lastmsg;
    }

    else {
      var botName = chat.botName;
      var image = chat.image;
      var lastmsgtime = chat.lastmsgtime;
      var lastmsg = chat.lastmsg;

      chatName = botName;
      lastSeenTime = lastmsgtime;
      lastMsgSent = lastmsg;
    }

    if (chat.toShow) {
      return (
        <div className="contact" onClick={() => this.changeID(chat.id, chatName)}>
          <img className="contact__avatar" src={img1}></img>
          <div className="contact__info">
            <h5 className="contact__username">{chatName}</h5>
            <p className="contact__lastSeen">{lastSeenTime}</p>
            <div className="last__message">{lastMsgSent}</div>
          </div>
        </div>
      );
    }
    else {
      return;
    }

    
  }

  changeID(id, name) {
    this.props.updateID(id, name);
  }

  render() {

    var chats = this.props.entries;
    var allChats = chats.map(this.createChatList);

    var peopleChats = chats.filter(function (chat) {
      return (chat.type === 0);
    });

    var peopleChatsMapped = peopleChats.map(this.createChatList);

    var groupsChats = chats.filter(function (chat) {
      return (chat.type === 1);
    });

    var groupsChatsMapped = groupsChats.map(this.createChatList);

    var botsChats = chats.filter(function (chat) {
      return (chat.type === 2);
    });

    var botsChatsMapped = botsChats.map(this.createChatList);
    
    if (this.props.types === 0) {
      return (
        <div>
          {peopleChatsMapped}
        </div>
      );  
    }

    else if (this.props.types === 1) {
      return (
        <div>
          {groupsChatsMapped}
        </div>
      );  
    }

    else if (this.props.types === 2) {
      return (
        <div>
          {botsChatsMapped}
        </div>
      );  
    }

    else {
      return (
        <div>
          {allChats}
        </div>
      );  
    }

  }  
}



export default Chats;
