import React from 'react';
import AccountsUIWrapper from './others/AccountsUIWrapper.jsx';
import Menu from './Menu/Menu.jsx';


const Layout = ({ children }) => {
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
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
