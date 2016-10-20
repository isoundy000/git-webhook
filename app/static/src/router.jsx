import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import MainComponent from './common/main.jsx';

import WebHook from './webHook.jsx';
import Server from './server.jsx';
import HistoryList from './historyList.jsx';
import History from './history.jsx';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent}>
      <Route path="/webhook" component={WebHook} />
      <Route path="/server" component={Server} />
      <Route path="/history/:webhook_id" component={HistoryList} />
      <Route path="/detail/:history_id" component={History} />
    </Route>
  </Router>),
  document.querySelector('#wrapper')
);