import React from 'react';

import { Redirect } from 'react-router';

import axios from 'axios';

import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class CustomForm extends React.Component {
    state = {
        redirect: false
      }

    handleFormSubmit = async (event, requestType, jobID) => {
        event.preventDefault();
        // this.props.history.push('/');
        const postObj={
            title: event.target.elements.title.value,
            descriptions: event.target.elements.descriptions.value,
            requirements : event.target.elements.requirements.value
        }
    

        if (requestType === "post") {
            await axios.post("http://127.0.0.1:8000/api/", postObj)
              .then(res => {
                if (res.status === 201) {
                    this.setState({ redirect: true })
                //   this.props.history.push(`/`);
                }
              })
          } else if (requestType === "put") {
            await axios.put(`http://127.0.0.1:8000/api/${jobID}/`, postObj)
              .then(res => {
                if (res.status === 200) {
                    this.setState({ redirect: true })
                //   this.props.history.push(`/`);
                }
              })
          }
        };



        // const title = event.target.elements.title.value;
        // const descriptions = event.target.elements.descriptions.value;
        // const requirements = event.target.elements.requirements.value;
        
        // switch (requestType) {
        //     case 'post':
        //         return axios.post('http://127.0.0.1:8000/api/',{
        //             title: title,
        //             descriptions: descriptions,
        //             requirements: requirements
        //         })
        //         .then(res => {
        //             if (res.status === 201) {
        //               this.props.history.push(`/`);
        //             }
        //         })
        //         .then(res => console.log(res))
        //         .catch(err => console.err(err));

        //     case 'put':
        //         return axios.put(`http://127.0.0.1:8000/api/${jobID}/`,{
        //             title: title,
        //             descriptions: descriptions,
        //             requirements: requirements
        //         })
        //         .then(res => console.log(res))
        //         .catch(err => console.err(err));
        // }
    

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/'/>;
          }
        return (
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.jobID )}>
            <FormItem label="Title" >
                <Input name="title" placeholder="input title" />
            </FormItem>
            
            <FormItem label="Descriptions">
                <Input name="descriptions" placeholder="input a description" />
            </FormItem>
            
            <FormItem label="Requirements">
                <Input name="requirements" placeholder="input requirements for the job" />
            </FormItem>
            
            <FormItem >
                <Button type="primary" htmlType="submit">{this.props.btnTxt}</Button>
            </FormItem>
            </Form>
        </div>
        );
    }
}

export default CustomForm;
