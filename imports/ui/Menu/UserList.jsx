import React, { Component } from 'react';


export default class Menu extends Component {
  render() {
    const { currentUser, users } = this.props;

    const userList = currentUser
      ? [currentUser, ...users.filter(u => u._id !== currentUser._id)]
      : users;

    return (
      <ul>
        {userList.map((user) =>
          <li key={user._id}>
            <div>{user.username}</div>
          </li>
        )}
      </ul>
    );
  }
}