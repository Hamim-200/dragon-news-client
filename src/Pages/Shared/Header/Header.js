import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
// import { FaBeer } from 'react-icons/fa';
import { FcApproval } from "react-icons/fc";

const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Megazin
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Images</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Feature
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About US</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <FcApproval /> Premium
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;