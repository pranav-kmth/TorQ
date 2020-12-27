import React, { Component } from 'react';
import './Navbar.css';
import {Navbar as NavBar, Nav , NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    
    

    render() {
        return (
            <NavBar className="navb" collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
                <Link to='/'>
                    <NavBar.Brand href="#home" className="navbar-logo">TorQ</NavBar.Brand>
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
                        <NavDropdown.Item eventKey="4.1"><i class="fas fa-sync-alt"></i> &nbsp;Trade in </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2"><i class="fas fa-puzzle-piece"></i> &nbsp;Accessories </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3"><i class="fas fa-tools"></i> &nbsp;Customize</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3"><i class="fas fa-clipboard-list"></i> &nbsp;Orders</NavDropdown.Item>
                                             
                        
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Support</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">Test Drive</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="exit" className= "navbar-exit">Adios! &nbsp; <i class="fas fa-sign-out-alt"></i></Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>
        )
    }
}

