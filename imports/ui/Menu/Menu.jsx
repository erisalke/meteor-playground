import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ChatList from './ChatList.jsx';
import UserList from './UserList.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { ChatRooms } from '/imports/api/chatRooms.js';
import InputBox from '../Messages/InputBox';

class Menu extends Component {
  onAddChatroom(name) {
    Meteor.call('chatRooms.create', name);
  }

  render() {
    const { chatRooms, users, currentUser } = this.props;

    return (
      <div>
        <h4>Chat rooms</h4>
        {currentUser ? <InputBox onSend={name => this.onAddChatroom(name )} placeholder="Add chat room"/> : ''}
        <ChatList chatRooms={chatRooms} />
        <h4>Users</h4>
        <UserList users={users} currentUser={currentUser} />
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('chatRooms');
  Meteor.subscribe('userList');

  return {
    chatRooms: ChatRooms.find({}).fetch(),
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(Menu);
