import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";

import AppNav from './AppNav';
import './App.css'

import Routes from './Routes';
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <AppNav/>
            <div className="container">
              { [...Routes] }
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
