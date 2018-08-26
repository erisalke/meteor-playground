import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/messages.js';


class ChatList extends Component {
  sendMessage(event) {
    event.preventDefault();
 
    const text = findDOMNode(this.refs.textInput).value.trim();
    const roomId = this.props.match.params.id;
    Meteor.call('messages.send', text, roomId);
    
    findDOMNode(this.refs.textInput).value = '';
  }

  renderChatRooms() {
    const roomId = this.props.match.params.id;

    // this should be done in selector
    const messages = this.props.messages
      .filter(msg => msg.room === roomId);

    return messages.map((msg) => {
      return (
        <li key={msg._id} >
          <strong>{msg.sender}</strong>: {msg.text}
        </li>
      );
    });
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
    return (
      <div>
        <ul>
          {this.renderChatRooms()}
        </ul>
        {this.renderInputBox()}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('messages');

  return {
    messages: Messages.find({}).fetch(),
  };
})(ChatList);
