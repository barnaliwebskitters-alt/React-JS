import React from "react";
import { Nav, Container, Navbar, Offcanvas, Form } from "react-bootstrap";
import Icons from "../../themes/Icon";
import "./NavBar.css"

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false} className="custom-navbar px-3 py-0">
      <Container fluid>

        {/* LEFT: Hamburger + Logo */}
        <div className="d-flex align-items-center gap-3">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Brand href="#home" className="mb-0">
            <img
              src={Icons.appLogo}
              alt="logo"
              width="150"
              height="100"
            />
          </Navbar.Brand>
        </div>

        {/* RIGHT: Search */}
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
          />
        </Form>

        {/* OFFCANVAS MENU */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          placement="start"
            className="custom-drawer"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Barnali Mahato</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav>
              <Nav.Link href="./Chat">Chat</Nav.Link>
              <Nav.Link href="#friends">Friends</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
};

export default NavBar;