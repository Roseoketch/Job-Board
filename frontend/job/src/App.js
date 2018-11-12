import React, { Component } from 'react';
import { BrowserRouter  as Router } from  'react-router-dom';
import BaseRouter from './routes';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './pic/logo.png';


import 'antd/dist/antd.css';


import CustomLayout from './containers/Layout';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
}
toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
  render() {
    return (
      <div className="App">
      {/* <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"><img src='./pic/logo.png' alt="moringa"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
        </Navbar> */}
        <Router>
          <CustomLayout>
              <BaseRouter />
          </CustomLayout >
        </Router>  
      </div>
    );
  }
}

export default App;
