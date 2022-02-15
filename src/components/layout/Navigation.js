import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar className="bg-yellow" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="/">
            Crud Cafetería
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto color-nav">
              <Link to='/' className="nav-link">Home</Link>
              <Link to='/product/table' className="nav-link">Products</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
