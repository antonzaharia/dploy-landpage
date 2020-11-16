import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import React, { Component } from 'react'
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/"><Home/></Route>
        </Router>
      </div>
    )
  }
}

