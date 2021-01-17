import React, { Component } from 'react';
import './Navbar.css';
import {Navbar as NavBar, Nav , NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Navbutton from './components/NavButton';
import {auth} from './components/firebase';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName : props.userName , 
            isLoggedIn : props.isLoggedIn , 
            userMail : props.userMail ,
        }
    }
    
    componentDidMount =() =>{
        auth.onAuthStateChanged(authUser => { 
            if(authUser){
              this.setState({
                  isLoggedIn : true
,              })
              
            }
            this.setState({
                isLoggedIn : false
,              })
            
          })
          console.log(this.state.isLoggedIn);
    }

    render() {
        const logout =() => {
            auth.signOut().then ( function () {
                alert('signed out');
            })
        }
        return (
            <NavBar className="navb col-lg-12" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Link to='/'>
                    <NavBar.Brand  className="navbar-logo">TorQ  </NavBar.Brand>
                </Link>
                <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                <NavBar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className = "navbar-sickwhips">                    
                        <Nav.Link href="Model-3" className="navbar-item">Model-3</Nav.Link>
                    
                        <Nav.Link href="RWB-911" className="navbar-item">RWB-911</Nav.Link>
                         
                        <Nav.Link href="Roadster" className="navbar-item">Roadster </Nav.Link>
                         
                        <Nav.Link href="Skyline" className="navbar-item">Skyline </Nav.Link> 
                    </Nav>
                    
                    <Nav className="ml-auto">
                    
                    <NavDropdown title="Settings"  className="dropdown-menu-left" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1"><i className="fas fa-sync-alt"></i> &nbsp;Trade in </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2"><i className="fas fa-puzzle-piece"></i> &nbsp;Accessories </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3"><i className="fas fa-tools"></i> &nbsp;Customize</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3"><i className="fas fa-clipboard-list"></i> &nbsp;Orders</NavDropdown.Item>
                                             
                        
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Support</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">Test Drive</NavDropdown.Item>
                    </NavDropdown>
                    <Navbutton />
                    <Nav.Link onClick={logout} className= "navbar-exit"> 
                    <i class="fas fa-power-off"></i>
                    </Nav.Link>
                     </Nav>
                </NavBar.Collapse>
            </NavBar>
        )
    }
}

