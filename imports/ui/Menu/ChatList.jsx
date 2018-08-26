import React, { Component } from 'react';

export default class Menu extends Component {
  renderChatRooms() {
    const { chatRooms } = this.props;

    return chatRooms.map((room) =>
      <li key={room._id}>{room.name}</li>
    );
  }

  render() {
    return (
      <ul>
        {this.renderChatRooms()}
      </ul>
    );
  }
}