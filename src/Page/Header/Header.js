import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Firebase/useFirebase";
import PrivateHeader from "../PrivatPages/PrivateHeader/PrivateHeader";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const { user } = useFirebase();
  return (
    <>
      <Navbar className="mb-3" sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand  href="#home" className="title">travelVai</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto menu">
              <Link to="/home">Home</Link>
              <Link to="/services">Services</Link>
              {!user.email ? <Link to="/login">Login</Link> 
              :
              <PrivateHeader></PrivateHeader>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr style={{background: '#8B66FF'}} />
    </>
  );
};

export default Header;
