import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render(){
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
          {
            this.props.isAuthenticated ?
            <Menu.Item key="2" onClick={this.props.logOut}>Logout</Menu.Item>
            :
            <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
          }
            <Menu.Item key="1"><Link to="/">Jobs</Link></Menu.Item>

          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/">Jobs</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Moringa Jobs Board ©2018 Created by The Amazing Team.
        </Footer>
      </Layout>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(actions.logOut())
  }
}

export default withRouter(connect(null,mapDispatchToProps)(CustomLayout))