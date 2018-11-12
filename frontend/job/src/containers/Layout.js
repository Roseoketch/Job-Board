import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return(
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                {/* <Menu.Item key="1"><img src={logo} alt="moringa"/></Menu.Item> */}
                <Menu.Item key="2">MORINGA SCHOOL JOB BOARD</Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                {/* <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item> */}
                <Breadcrumb.Item><Button type="primary" style={{float:'right' , margin:'-5px'}}><Link to="/job/create"> Post a Job</Link></Button></Breadcrumb.Item>

            </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {/* //render whatever will be passed in CustomLayout */}
                    {props.children} 
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ©2018 Moringa School
            </Footer>
        </Layout>
    );
}

export default CustomLayout;

  