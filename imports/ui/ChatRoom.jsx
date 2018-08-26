import React, { Component } from 'react';

export default class ChatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        { id: 0, sender: 'Bob', text: 'hi' },
        { id: 1, sender: 'Ann', text: 'hello' },
        { id: 2, sender: 'Bob', text: 'how are you?' }
      ],
    };
  }

  renderChatRooms() {
    let messages = this.state.messages || [];

    return messages.map((msg) => {
      return (
        <li key={msg.id} >
          <strong>{msg.sender}</strong>: {msg.text}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderChatRooms()}
      </ul>
    );
  }
}