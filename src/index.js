import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.less';
import App from './components/App';
import UserProvider from "./providers/UserProvider";
import ResponsesProvider from "./providers/ResponsesProvider";

ReactDOM.render(
    <UserProvider>
        <ResponsesProvider>
            <App />
        </ResponsesProvider>
    </UserProvider>,
  document.getElementById('root')
);
