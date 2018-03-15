import * as React from 'react';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CustomHeader, Footer } from '../../Components/';

import {Home, Register, Login} from '../../Pages/';

export class NoSideBarLayout extends Component {
  render() {
    return (
      <div className="app no-side-bar">
        <CustomHeader/>
        <div className="app sidebar-hidden">
          <main className="main">
            <Switch>
              <Route exact path="/" name="Home" component={Home}/>
              <Route path="/login" name="Login" component={Login}/>
                <Route path="/register" name="Register" component={Register}/>
              <Redirect from="/" to="/"/>
            </Switch>
          </main>
        </div>
        <Footer/>
      </div>
    );
  }
}
