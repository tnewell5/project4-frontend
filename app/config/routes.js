import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Yes from '../components/Yes';
import No from '../components/No';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='yes' component={Yes} />
      <Route path='no' component={No} />
    </Route>
  </Router>

);

export default routes;
