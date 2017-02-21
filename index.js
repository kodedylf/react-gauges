import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import DecisionExplanation from './DecisionExplanation';
import Customer from './Customer';
import Home from './Home';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="customer/:invId" component={Customer} />
      <Route path="purchaseapproval/:paId" component={DecisionExplanation} />
    </Route>
  </Router>
), document.getElementById('app'))