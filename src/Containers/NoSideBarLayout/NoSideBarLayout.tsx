import * as React from 'react';
import { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { CustomHeader, Footer } from '../../Components/';

import { Home, Help } from '../../Pages/';

export class NoSideBarLayout extends Component {
  render() {
    return (
      <div className="app">
        <CustomHeader/>
        <div className="app-body">
          <main className="main">
            <Container fluid>
              <Switch>
                <Route path="/help" name="Help" component={Help}/>
                <Route path="/" name="Home" component={Home}/>
              </Switch>
            </Container>
          </main>
        </div>
        <Footer/>
      </div>
    );
  }
}
