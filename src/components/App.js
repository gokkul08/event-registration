import React from 'react';
import '../styles/App.less';
import Authentication from "./Authentication";
import ThankYou from "./ThankYou";
import ForgotPassword from "./ForgotPassword";
import { Switch, Route } from "react-router-dom";
import logo from "../images/logo.png";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <div className="App-container">
          <div className="App-header">
              <img src={logo} className="logo" alt="Logo" />
          </div>
          <Switch>
              <Route exact path="/" component={Authentication} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/thankyou" component={ThankYou} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
