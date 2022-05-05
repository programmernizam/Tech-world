import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../../../images/logo.png'
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand className="w-50" as={Link} to="/"><img className="w-50" src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
            <Nav.Link as={CustomLink} to="/myitems">My Items</Nav.Link>
            <Nav.Link as={CustomLink} to="/additem">Add Item</Nav.Link>
            <Nav.Link as={CustomLink} to="*">About</Nav.Link>
            <Nav.Link as={CustomLink} to="*">Blogs</Nav.Link>
            <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
};

export default Header;
