import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class JobDetail extends React.Component{
  
    state = {
        job: {}
    }

    componentDidMount(){
        const jobID = this.props.match.params.jobID;
        axios.get(`http://127.0.0.1:8000/api/${jobID}/`)
            .then(res =>{
                this.setState({
                    job: res.data
                });
                
            })

    }
    
    render (){
        return(
            <Card title={this.state.job.title}>
                <p>{this.state.job.descriptions}</p>

            </Card>
        )
    }
}

export default JobDetail;