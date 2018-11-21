import React from 'react';
import axios from 'axios';

import Jobs from '../components/jobs';

class JobList extends React.Component {

  state = {
    jobs: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
         this.setState({
           jobs: res.data
         });
         console.log(res.data);
      })
  }

  render() {
    return(
      <Jobs data={this.state.jobs} />
    )
  }
}

export default JobList;