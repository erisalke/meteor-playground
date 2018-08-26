import React, { Component } from 'react';
import ChatList from './ChatList.jsx';
import UserList from './UserList.jsx';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <h4>Chat rooms</h4>
        <ChatList />
        <h4>Users</h4>
        <UserList />
      </div>
    );
  }
}