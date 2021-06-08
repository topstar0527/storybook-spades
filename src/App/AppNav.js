import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">The Spades</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}><Link to="/booking">Booking</Link></NavItem>
                <NavItem eventKey={2}><Link to="/today">Today</Link></NavItem>
            </Nav>
        </Navbar>
    )
}