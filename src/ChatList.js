import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './img/pexels-photo-894359.jpeg';

import Chats from './Chats.js';



class ChatList extends Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      chats: [],
      types: 0,
      id: 0
    };    

    var chatsArray = this.state.chats;

    chatsArray.unshift({
      type: 0,
      fname: "Eddie",
      lname: "VanHalen",
      username: "@vanhalen",
      phone: 87779993456,
      image: img1,
      lastmsgtime: "18:10",
      lastmsg: "wohoo",
      id: 0,
      toShow: true
    });

    chatsArray.unshift({
      type: 0,
      fname: "Emma",
      lname: "Watson",
      username: "@watson",
      phone: 87019992450,
      image: img1,
      lastmsgtime: "14:46",
      lastmsg: "bungalaa",
      id: 1,
      toShow: true
    });

    chatsArray.unshift({
      type: 0,
      fname: "Rob",
      lname: "Watson",
      username: "@rwatson",
      phone: 87019992450,
      image: img1,
      lastmsgtime: "11:26",
      lastmsg: "hiii",
      id: 6,
      toShow: true
    });

    chatsArray.unshift({
      type: 0,
      fname: "Sam",
      lname: "Rockwell",
      username: "@watson",
      phone: 87019992450,
      image: img1,
      lastmsgtime: "21:23",
      lastmsg: "aloha",
      id: 7,
      toShow: true
    });

    chatsArray.unshift({
      type: 1,
      groupName: "FriendsGroup",
      lastmsg: "John: Hi guys!",
      image: img1,
      lastmsgtime: "15:44",
      id: 2,
      toShow: true
    });

    chatsArray.unshift({
      type: 1,
      groupName: "Musicians",
      lastmsg: "Guliermo: i broke my guitar",
      image: img1,
      lastmsgtime: "10:54",
      id: 3,
      toShow: true
    });

    chatsArray.unshift({
      type: 1,
      groupName: "Replicants",
      lastmsg: "BladeRunner: i'll kill you all",
      image: img1,
      lastmsgtime: "13:24",
      id: 8,
      toShow: true
    });

    chatsArray.unshift({
      type: 2,
      botName: "FlibustaBot",
      lastmsg: "Download this books!",
      image: img1,
      lastmsgtime: "12:15",
      id: 4,
      toShow: true
    });
    
    chatsArray.unshift({
      type: 2,
      botName: "HappyBot",
      lastmsg: "Dont worry",
      image: img1,
      lastmsgtime: "13:48",
      id: 5,
      toShow: true
    });

    chatsArray.unshift({
      type: 2,
      botName: "MusicBot",
      lastmsg: "Download this music!",
      image: img1,
      lastmsgtime: "12:15",
      id: 9,
      toShow: true
    });
    
    chatsArray.unshift({
      type: 2,
      botName: "YouTubeBot",
      lastmsg: "Download this video",
      image: img1,
      lastmsgtime: "13:48",
      id: 10,
      toShow: true
    });

    this.setState({
      chats: chatsArray
    });

    this.changeType = this.changeType.bind(this);
    this.updateID = this.updateID.bind(this);
    this.searchChats = this.searchChats.bind(this);
  }

  changeType(number) {
    this.setState({
      types: number
    });
  }

  updateID(id, name) {
    this.props.updateID(id, name);

    /*var chats = this.state.chats;
    var neededChat;

    for (var i = 0; i < chats.length; i++) {
      if (chats[i].id === id) {
        neededChat = chats[i];
      }
    }

    var filteredChats = chats.filter(function (ch) {
      return (ch.id !== id);
    });

    filteredChats.unshift(neededChat);

    this.setState({
      chats: filteredChats
    });*/
  }

  searchChats() {
    var chatsArray = this.state.chats;

    for (var i = 0; i < chatsArray.length; i++) {
      chatsArray[i].toShow = true;
    }

    for (var i = 0; i < chatsArray.length; i++) {
      if (chatsArray[i].type === 0) {
        if (!chatsArray[i].fname.startsWith(this._inputElement1.value)) {
          chatsArray[i].toShow = false;
        }
      }

      else if (chatsArray[i].type === 1) {
        if (!chatsArray[i].groupName.startsWith(this._inputElement1.value)) {
          chatsArray[i].toShow = false;
        }
      }

      else if (chatsArray[i].type === 2) {
        if (!chatsArray[i].botName.startsWith(this._inputElement1.value)) {
          chatsArray[i].toShow = false;
        }
      }
    }

    this.setState({
      chats: chatsArray
    });
  }

  render() {

    return (
      <div className="left__part">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" className="form-control" placeholder="Search" 
                  aria-label="Username" aria-describedby="basic-addon1" 
                  onChange={() => this.searchChats()} ref={(a) => this._inputElement1 = a}></input>
        </div>

        <div className="btn-group chat__choice" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={() => this.changeType(0)}>Люди</button>
          <button type="button" className="btn btn-primary" onClick={() => this.changeType(1)}>Группы</button>
          <button type="button" className="btn btn-primary" onClick={() => this.changeType(2)}>Боты</button>
        </div>
        <div className="contact__left">
          <Chats entries={this.state.chats} 
                  types={this.state.types} 
                  id={this.props.id}  
                  updateID={this.updateID}/>  
        </div>
      </div>
    );
  }
}

export default ChatList;
