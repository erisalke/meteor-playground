import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ChatList from './ChatList.jsx';
import UserList from './UserList.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import { ChatRooms } from '/imports/api/chatRooms.js';
import { Users } from '/imports/api/users.js';


class Menu extends Component {
  render() {
    const { chatRooms, users } = this.props;

    return (
      <div>
        <h4>Chat rooms</h4>
        <ChatList chatRooms={chatRooms} />
        <h4>Users</h4>
        <UserList users={users}/>
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
  };
})(Menu);