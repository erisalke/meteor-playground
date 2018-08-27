import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/messages.js';
import MessagesComponent from './Messages/MessagesComponent';

class PrivateMessagesWrapper extends Component {
  render() {
    const currentUserId = this.props.currentUserId;
    const interlocutorId = this.props.match.params.id;

    const messages = this.props.messages
      .filter(({ userPair }) => userPair.includes(interlocutorId) && userPair.includes(currentUserId));
    const onSend = (text) =>
      Meteor.call('messages.sendPrivate', text, [currentUserId, interlocutorId]);

    return (
      <MessagesComponent
        messages={messages}
        onSend={onSend}
        currentUser={currentUserId}
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('messages');
  
  return {
    messages: Messages.find({ isPrivate: { $eq: true } }).fetch(),
    currentUserId: Meteor.userId(),
  };
})(PrivateMessagesWrapper);
