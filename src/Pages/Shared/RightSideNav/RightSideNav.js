import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaInstagram } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ListGroup } from 'react-bootstrap';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram />Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;