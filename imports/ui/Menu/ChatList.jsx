import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
  renderChatRooms() {
    const { chatRooms } = this.props;

    return chatRooms.map((room) =>
      <li key={room._id}>
        <Link to={`/chat/${room.name}`}>{room.name}</Link>
      </li>
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