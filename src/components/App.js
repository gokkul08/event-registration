import React from 'react';
import '../styles/App.less';
import Authentication from "./Authentication";
import ThankYou from "./ThankYou";
import ThankYouAdmin from "./ThankYouAdmin";
import ForgotPassword from "./ForgotPassword";
import FAQ from "./FAQ";
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
              <Route exact path="/thankyouadmin" component={ThankYouAdmin} />
              <Route exact path="/faq" component={FAQ} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
