import React from 'react';
import { Route } from 'react-router-dom';

import JobList from './containers/JobListView';
import JobDetail from './containers/JobDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={JobList}/>
        <Route exact path='/:jobID' component={JobDetail}/>
        
    </div>

);

export default BaseRouter;
