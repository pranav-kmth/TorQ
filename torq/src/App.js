
import './App.css';
import Navbar from './Navbar';
import Slide from './Slide';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Catalog from './components/Catalog';
import Customise from './components/Customise';

import React, { Component } from 'react'

export default class App extends Component {



  render() {
    return (
      <Router>
        
        
        <div className="App">
          
          <Switch >
            <Route path="/Roadster/design">
              <Navbar />
              <Customise />    
            </Route>
            <Route path="/Roadster">
              <Navbar />
              <Catalog />    
            </Route>
            <Route path="/RWB-911/design">
              <Navbar />
              <Customise />    
            </Route>
            <Route path="/RWB-911">
              <Navbar />
              <Catalog />    
            </Route>
            <Route path="/Skyline/design">
              <Navbar />
              <Customise />  
            </Route>
            <Route path="/Skyline">
              <Navbar />
              <Catalog />    
            </Route>
            <Route path="/Model-3/design">
              <Navbar />
              <Customise />    
            </Route>
            <Route path="/Model-3">
              <Navbar />
              <Catalog />    
            </Route>
            <Route path="/">
              <Navbar />
              <Slide />
    
            </Route>
    
    
    
          </Switch>
        </div>
  
  
      </Router>
    );
  }
}

