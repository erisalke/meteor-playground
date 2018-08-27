import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            {currentUser
              ? <Link to={`/private-message/${user._id}`}>{user.username}</Link>
              : user.username}
          </li>
        )}
      </ul>
    );
  }
}
