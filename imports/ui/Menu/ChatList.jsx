import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatList: [
        { id: 0, name: 'general' },
        { id: 1, name: 'dev' },
        { id: 2, name: 'random' }
      ],
    };
  }

  renderChatRooms() {
    let chats = this.state.chatList || [];

    return chats.map((chat) => {
      return (
        <li key={chat.id}>{chat.name}</li>
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