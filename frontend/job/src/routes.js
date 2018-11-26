import React from 'react';
import { Route } from 'react-router-dom';

import JobList from './containers/JobListView';
import JobDetail from './containers/JobDetailView';
import JobCreate from './containers/JobCreate';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={JobList} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/jobs/create' component={JobCreate}/>
    <Route exact path='/job/:jobID' component={JobDetail}/>
  </div>
);

export default BaseRouter;
