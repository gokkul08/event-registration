import React from 'react';
import '../styles/App.less';
import Authentication from "./Authentication";
import ThankYou from "./ThankYou";
import { Switch, Route } from "react-router-dom";
import logo from "../images/logo.png";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <div className="App-container">
          <div className="App-header">
              <img src={logo} className="logo" alt="Logo" />
              <div className="headline">
                  <div className="line1">
                      Welcome to the 2020
                  </div>
                  <div className="line2">
                      IAC Annual Planning Meeting
                  </div>
              </div>
          </div>
          <Switch>
              <Route exact path="/" component={Authentication} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/thankyou" component={ThankYou} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
