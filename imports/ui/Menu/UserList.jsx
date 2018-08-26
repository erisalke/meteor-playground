import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 0, name: '- you -' },
        { id: 1, name: 'Ann' },
        { id: 2, name: 'Bob' }
      ],
    };
  }

  renderChatRooms() {
    let users = this.state.users || [];

    return users.map((user) => {
      return (
        <li key={user.id}>{user.name}</li>
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