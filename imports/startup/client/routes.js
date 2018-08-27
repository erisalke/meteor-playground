import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from '/imports/ui/Layout.jsx';
import ChatRoom from '/imports/ui/ChatRoom/ChatRoom.jsx';
import NotFoundPage from '/imports/ui/others/NotFoundPage.jsx';

const LoggedOut = () => (
  <span>Please select a chat room</span>
);

export const renderRoutes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <Layout><LoggedOut /></Layout>} />
      <Route exact path="/chat/:id" render={(props) => <Layout><ChatRoom {...props} /></Layout>} />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);
