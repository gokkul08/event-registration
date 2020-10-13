import React from 'react';
import '../styles/App.less';
import Authentication from "./Authentication";
import ThankYou from "./ThankYou";
import { Switch, Route } from "react-router-dom";
import logo from "../images/logo.jpg";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <div className="App-container">
          <div className="App-header">
              <img src={logo} className="logo" alt="Logo" />
              <span className="headline">Welcome to the IAC 2020 Annual Planning meeting</span>
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
