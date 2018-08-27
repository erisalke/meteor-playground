import React, { Component } from 'react';
import InputBox from './InputBox';

export default class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: '' };
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

  render() {
    const { messages, onEdit, onRemove } = this.props
    const { isEditing } = this.state;

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
              
              <span style={{ float: 'right' }}>
                <button onClick={() => this.setState({isEditing: msg._id})}>//</button>
                <button onClick={() => onRemove(msg._id)}>X</button>
              </span>
            
          </li>
        )}
      </ul>
    )
  }
}
