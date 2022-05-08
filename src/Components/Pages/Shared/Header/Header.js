import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import Logo from "../../../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  const handelSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="w-50" as={Link} to="/">
          <img className="w-50" src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/inventories">
              Inventory
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
            {user ? (
              <div className="d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle className="p-0" variant="none" id="dropdown-basic">
                    <img
                      src={user.photoURL ? user.photoURL : "https://i.ibb.co/TLk8gFC/60111.png"}
                      alt="User Img"
                      className="w-25 rounded-circle"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={CustomLink} to="additem">Add Item</Dropdown.Item>
                    <Dropdown.Item as={CustomLink} to="myitem">My Item</Dropdown.Item>
                    <Dropdown.Item as={CustomLink} to="manageitems">Manage Item</Dropdown.Item>
                    <Dropdown.Item as={Button} onClick={handelSignOut}>Sign Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <Nav.Link as={CustomLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
