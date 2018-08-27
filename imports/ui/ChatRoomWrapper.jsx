import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/messages.js';
import MessagesComponent from './Messages/MessagesComponent';

class ChatRoomWrapper extends Component {
  render() {
    const roomId = this.props.match.params.id;
    const currentUser = this.props.currentUser;
    const messages = this.props.messages.filter(msg => msg.room === roomId);
    const onSend = (text) => Meteor.call('messages.send', text, roomId);

    return (
      <MessagesComponent
        messages={messages}
        onSend={onSend}
        currentUser={currentUser}
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('messages');

  return {
    messages: Messages.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(ChatRoomWrapper);
