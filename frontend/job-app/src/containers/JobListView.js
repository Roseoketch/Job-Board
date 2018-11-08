import React from 'react';
import Jobs from '../components/Jobs';
import axios from 'axios';

// import JobList from '.containers/JobsListView';
    // const listData = [];
    // for (let i = 0; i < 23; i++) {
    //   listData.push({
    //     href: 'http://ant.design',
    //     title: `ant design part ${i}`,
    //     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    //     content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    //   });
    // }

class JobList extends React.Component{
  
    state = {
        jobs: []
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then(res =>{
                this.setState({
                    jobs: res.data
                });
                // console.log(res.data);
                console.log(this.state.jobs);
                

            })

    }
    
    render (){
        
        return(
            <div>
                <Jobs data={this.state.jobs}/>
            </div>

        )
    }
}

export default JobList;