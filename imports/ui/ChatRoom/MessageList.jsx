import React from 'react';

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(msg =>
      <li key={msg._id} >
        <strong>{msg.sender}</strong>: {msg.text}
      </li>
    )}
  </ul>
);


export default MessageList;