import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Icons from '../themes/Icon';

const Home = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Icons.appLogo}
              width="100"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Chat</Nav.Link>
            <Nav.Link href="#pricing">Friends</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </div>
  )
}

export default Home
