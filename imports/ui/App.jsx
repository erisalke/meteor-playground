import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AccountsUIWrapper from './others/AccountsUIWrapper.jsx';
import Menu from './Menu/Menu.jsx';
import ChatRoom from './ChatRoom.jsx';

export default class App extends Component {
  render() {
    const ChatRoomWithRouter = withRouter(props => <ChatRoom {...props} />);

    return (
      <div className="wrapper">
        <header>
          <h1>Let's talk</h1>
          <AccountsUIWrapper />
        </header>

        <div className="container">
          <div className="menu">
            <Menu />
          </div>

          <div className="chat-room">
            {
              this.props.match.params.id
                ? <ChatRoomWithRouter />
                : <div>Please select a chat room</div>
            }
          </div>
        </div>
      </div>
    );
  }
}