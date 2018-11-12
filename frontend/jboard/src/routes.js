import React from 'react';
import { Route } from 'react-router-dom';

import JobList from './containers/JobListView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={JobList} />
    <Route exact path='/login/' component={Login} />
    <Route exact path='/signup/' component={Signup} />
  </div>
);

export default BaseRouter;
