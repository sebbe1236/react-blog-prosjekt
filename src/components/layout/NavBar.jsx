import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function NavBar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Blog site</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Home
              </NavLink>
              <NavLink to="/blogs" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Blogs
              </NavLink>

              <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                About
              </NavLink>
              <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
