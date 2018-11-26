import React from 'react';

import { Card } from 'antd';


import CustomForm  from '../components/Form';


class JobCreate extends React.Component{
    render() {
        return(
            <div>
                <Card title="Create a Job">
                    <CustomForm  requestType="post" jobID={null} btnTxt="Create"/>
                </Card>
            </div>
        )
    }
}

export default JobCreate;