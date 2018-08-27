import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';

export default class InputBox extends Component {
  sendMessage(event) {
    event.preventDefault();

    const text = findDOMNode(this.refs.textInput).value.trim();
    this.props.onSend(text);

    findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <form className="new-message" onSubmit={this.sendMessage.bind(this)} >
        <input
          type="text"
          ref="textInput"
          placeholder="Type to send message"
        />
      </form>
    )
  }
}

