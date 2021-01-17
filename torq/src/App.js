
import './App.css';
import Navbar from './Navbar';
import Slide from './Slide';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Catalog from './components/Catalog';
import Customise from './components/Customise';
import Signup from './components/Signup';
import React, { Component } from 'react';
import Login from './components/Login';
import { Items } from './components/Items';
import Loading from './components/Loading';


export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      userName : "",
      userMail : "" ,
      isLoggedIn  : false , 
      isLoading : true , 
    }
  }

  componentDidMount = () => {
    this.setState ( {
      isLoading : false ,
    })
  }

  
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar 
            isLoggedIn = {this.state.isLoggedIn}
            userName = {this.state.userName}
            userMail  = {this.state.userMail}          
          />
          <Switch >
            <Route path="/Roadster/design">
              
              <Customise />    
            </Route>

            <Route path="/Roadster" >
              
            {this.state.isLoading ? <Loading /> : <Catalog 
                items = {Items[2]}
                img = {Items[2].bg_img}
              /> }   
            </Route>

            <Route path="/RWB-911/design">
              
              <Customise />    
            </Route>

            <Route path="/RWB-911">
              
            {this.state.isLoading ? <Loading /> : <Catalog 
                items = {Items[0]}
                img = {Items[0].bg_img}
              /> }    
            </Route>

            <Route path="/Skyline/design">
              
              <Customise />  
            </Route>

            <Route path="/Skyline">
              
            {this.state.isLoading ? <Loading /> : <Catalog 
                items = {Items[3]}
                img = {Items[3].bg_img}
              /> }    
            </Route>

            <Route path="/Model-3/design">
              
              <Customise />    
            </Route>

            <Route path="/Model-3">
              {this.state.isLoading ? <Loading /> : <Catalog 
                items = {Items[1]}
                img = {Items[1].bg_img}
              /> }
                 
            </Route>

            <Route path="/Login">
              
              <Login 
              isLoggedIn = {this.state.isLoggedIn}
              userName = {this.state.userName}
              
              />
            </Route>

            <Route path="/Signup">
              
              <Signup 
              isLoggedIn = {this.state.isLoggedIn}
              userName = {this.state.userName}
              
              />
            </Route>
            

            <Route path="/">
              
              <Slide />
            </Route>
          </Switch>
        </div>
  
  
      </Router>
    );
  }
}

