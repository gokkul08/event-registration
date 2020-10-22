import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import UserProvider from "./providers/UserProvider";
import ResponsesProvider from "./providers/ResponsesProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <UserProvider>
            <ResponsesProvider>
                <App />
            </ResponsesProvider>
        </UserProvider>
    </Router>,
  document.getElementById('root')
);
