import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/messages.js';
import MessagesComponent from './Messages/MessagesComponent';

class PrivateMessagesWrapper extends Component {
  render() {
    const currentUserId = this.props.currentUserId;
    let interlocutorId = this.props.match.params.id;

    if (currentUserId === interlocutorId) {
      interlocutorId = 'dont-mind-me-just-thinking-outlaud';
    }

    const messages = this.props.messages
      .filter(({ userPair }) => userPair.includes(interlocutorId) && userPair.includes(currentUserId));
    const onSend = (text) =>
      Meteor.call('messages.sendPrivate', text, [currentUserId, interlocutorId]);
    const onEdit = (text, messageId) => Meteor.call('messages.edit', text, messageId);
    const onRemove = messageId => Meteor.call('messages.remove', messageId);

    return (
      <MessagesComponent
        messages={messages}
        currentUser={currentUserId}
        onSend={onSend}
        onEdit={onEdit}
        onRemove={onRemove}
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
