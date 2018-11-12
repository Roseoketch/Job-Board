import React from 'react';
import { Route } from 'react-router-dom';

import JobList from './containers/JobListView' 

import JobDetail from './containers/JobDetailView';
import JobCreate from './containers/JobCreate';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={JobList}/>
        <Route exact path='/:jobID' component={JobDetail}/>
        <Route exact path='/job/create' component={JobCreate}/>

    </div>
);

export default BaseRouter;