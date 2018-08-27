import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/messages.js';
import MessageList from './MessageList';

class ChatList extends Component {
  sendMessage(event) {
    event.preventDefault();

    const text = findDOMNode(this.refs.textInput).value.trim();
    const roomId = this.props.match.params.id;
    Meteor.call('messages.send', text, roomId);

    findDOMNode(this.refs.textInput).value = '';
  }

  renderInputBox() {
    return (
      <form className="new-message" onSubmit={this.sendMessage.bind(this)} >
        <input
          type="text"
          ref="textInput"
          placeholder="Type to send message"
        />
      </form>
    );
  }

  render() {
    const roomId = this.props.match.params.id;
    const messages = this.props.messages.filter(msg => msg.room === roomId);

    return (
      <div>
        <MessageList messages={messages} />
        
        {this.props.currentUser
          ? this.renderInputBox()
          : 'Please log in'}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('messages');

  return {
    messages: Messages.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(ChatList);
