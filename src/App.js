import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import "./App.css";

import Analyze from './com/Analyze/Analyze';

import Auth from './com/Auth';
import Navbar from './com/navbar/Navbar';
const App = () => {
    return (
        <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          
      
          <Route path="/" exact component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
    )

}

export default App
