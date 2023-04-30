import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";




const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' className="navbar-brand">QKMF</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/admin' className="nav-link">Administrator</Link>
                        <Link to='/doctor' className="nav-link">Doktor</Link>
                        <Link to='/patient' className="nav-link">Pacient</Link>
                    </Nav>
                    <Nav>
                        <Link to='/about' className="nav-link">Reth Nesh</Link>
                        <Link to='/contactus' className="nav-link">Na Kontaktoni</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation;
