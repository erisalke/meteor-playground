import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '/imports/ui/App.jsx';
import Chat from '/imports/ui/Chat.jsx';
import NotFoundPage from '/imports/ui/NotFoundPage.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/chat/:id" component={Chat}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);
