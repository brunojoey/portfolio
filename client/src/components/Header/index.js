import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import buildRoutes from "../../utils/buildRoutes";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navigationBar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-links">
            <Nav.Link to={buildRoutes("/")} as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to={buildRoutes("/portfolio")} as={Link}>
              Portfolio
            </Nav.Link>
            <Nav.Link to={buildRoutes("/resume")} as={Link}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
