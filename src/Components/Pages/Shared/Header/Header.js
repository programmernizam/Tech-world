import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../../../images/logo.png'
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="w-50" as={Link} to="/"><img className="w-50" src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
            <Nav.Link as={CustomLink} to="/home">About</Nav.Link>
            <Nav.Link as={CustomLink} to="/home">Blogs</Nav.Link>
            <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
};

export default Header;
