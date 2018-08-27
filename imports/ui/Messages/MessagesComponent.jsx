import React, { Component } from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';

export default class MessagesComponent extends Component {
  render() {
    return (
      <div>
        <MessageList messages={this.props.messages} />

        {this.props.currentUser
          ? <InputBox onSend={this.props.onSend.bind(this)} placeholder="Type to send message" />
          : 'Please log in!'
        }
      </div>
    );
  }
}
