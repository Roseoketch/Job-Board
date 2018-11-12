import React from 'react';

import axios from 'axios';

import { Card } from 'antd';   

// import { Link } from 'react-router-dom';


import Jobs from '../components/Jobs';

// import CustomForm  from '../components/Form';


class JobList extends React.Component{

    state = {
        jobs: []
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    jobs: res.data
                });
                // console.log(res.data)
            })
    }

    render(){
        return (
            <div>
                <Card>
                <Jobs data={this.state.jobs} />
                </Card>    
            </div>
        );
    }
}

export default JobList;