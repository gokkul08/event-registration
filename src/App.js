import React from 'react';
import FormsContainer from './FormsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
          <div className="App-header">
              <span>
              IAC
          </span>
              <span>Welcome to the IAC Executive Retreat Registration Questionnaire</span>
              <span>Come join the rest of the Executive Team</span>
          </div>
          <FormsContainer />
      </div>
    </div>
  );
}

export default App;
