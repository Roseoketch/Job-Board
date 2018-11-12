import React from 'react';

import axios from 'axios';

import { Card, Button } from 'antd';

import CustomForm  from '../components/Form';



class JobDetail extends React.Component{

    state = {
        job: {}
    }
    componentDidMount() {
        const jobID = this.props.match.params.jobID;
        axios.get(`http://127.0.0.1:8000/api/${jobID}/`)
            .then(res => {
                this.setState({
                    job: res.data
                });
                console.log(res.data) 
            })
    }
    handleDelete = (event) => {
        const jobID = this.props.match.params.jobID;
        axios.delete(`http://127.0.0.1:8000/api/${jobID}/`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render(){
        return (
            <div>
                <Card title={this.state.job.title}>
                    <p>Description: {this.state.job.descriptions} </p>
                    <p>Requirements: {this.state.job.requirements}</p>
                    <p>Date Posted: {this.state.job.date_posted}</p>
                </Card>
                <br/>
                <Card title= "Update Job" >
                <CustomForm requestType="put" jobID= {this.props.match.params.jobID} btnTxt="Update" />
                <form onSubmit={this.handleDelete} >
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
                </Card>
            </div>
        );
    }
}

export default JobDetail;