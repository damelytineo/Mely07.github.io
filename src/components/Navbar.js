import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">

                <Navbar.Brand href="/"> DT </Navbar.Brand>

                <Nav className="col-sm-3">
                    
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/experience">Experience</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Nav className="ml-auto">

                    <Nav.Link href="/contact">Contact</Nav.Link></Nav>
            </Navbar>
        );
    }
}

export default NavBar;