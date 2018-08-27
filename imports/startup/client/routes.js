import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from '/imports/ui/Layout.jsx';
import ChatRoomWrapper from '/imports/ui/ChatRoomWrapper.jsx';
import NotFoundPage from '/imports/ui/others/NotFoundPage.jsx';

const LoggedOut = () => (
  <span>Please select a chat room</span>
);

export const renderRoutes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <Layout><LoggedOut /></Layout>} />
      <Route exact path="/chat/:id" render={(props) => <Layout><ChatRoomWrapper {...props} /></Layout>} />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);
