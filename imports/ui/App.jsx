import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Menu from './Menu.jsx';
import ChatRoom from './ChatRoom.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header style={{ border: 'solid pink 1px' }}>
          <h1>Let's talk</h1>
          <AccountsUIWrapper />
        </header>

        <div className="container">
          <div className="menu">
            <Menu />
          </div>

          <div className="chat-room">
            <ChatRoom />
          </div>
        </div>
      </div>
    );
  }
}