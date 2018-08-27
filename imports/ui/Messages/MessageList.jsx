import React from 'react';

const MessageList = ({ messages, onRemove }) => (
  <ul>
    {messages.map(msg =>
      <li key={msg._id} className="message">
        <span><strong>{msg.sender}</strong>: {msg.text}</span>
        <span style={{ float: 'right'}}>          
          <button onClick={() => onRemove(msg._id) }>X</button>
        </span>
      </li>
    )}
  </ul>
);


export default MessageList;