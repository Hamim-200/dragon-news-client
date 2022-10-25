import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        // <div>
        //     <h4><small>Copyright @2022</small></h4>
        // </div>

        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Copyright @2022</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        All right reserved by: <a href="#login">Dragon News</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Footer;