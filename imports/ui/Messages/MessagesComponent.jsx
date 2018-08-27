import React, { Component } from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';

export default class MessagesComponent extends Component {
  render() {
    const { messages, currentUser, onSend, onRemove } = this.props;

    return (
      <div>
        <MessageList messages={messages} onRemove={onRemove.bind(this)}/>

        {currentUser
          ? <InputBox
            placeholder="Type to send message"
            onSend={onSend.bind(this)}
          />
          : 'Please log in!'
        }
      </div>
    );
  }
}