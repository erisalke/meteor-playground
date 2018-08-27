import React, { Component } from 'react';
import InputBox from './InputBox';

export default class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: '' };
  }

  toggleEditing(isEditing) {
    this.state.isEditing
      ? this.setState({ isEditing: '' })
      : this.setState({ isEditing });
  }

  renderInlineEdit(msg) {
    const formStyle = { width: "300px", border: 'dotted 1px gray', margin: '0 5px', display:'inline-block' };

    return(
      <InputBox
        text={msg.text}
        style={formStyle}
        onSend={(text) => {
          this.props.onEdit(text, msg._id)
          this.setState({ isEditing: '' })
        }}/>
    )
  }

  renderActionButtons(msg) {
    return (
      <span style={{ float: 'right' }}>
        <button onClick={() => this.toggleEditing(msg._id)}>//</button>
        <button onClick={() => this.props.onRemove(msg._id)}>X</button>
      </span>
    );
  }

  render() {
    const { messages, currentUser } = this.props;
    const { isEditing } = this.state;
    const currentUserId = currentUser && currentUser._id;

    return (
      <ul>
        {messages.map(msg =>
          <li key={msg._id} className="message">
              <span>
                <strong>{msg.sender}</strong>: 
                {isEditing === msg._id
                  ? this.renderInlineEdit(msg)
                  : msg.text}
              </span>
              
              {msg.owner === currentUserId
                ? this.renderActionButtons(msg)
                : ''}
          </li>
        )}
      </ul>
    )
  }
}
