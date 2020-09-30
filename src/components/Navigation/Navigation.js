import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Status from "./Status/Status";
export default function Navigation() {
  let location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Clerks</Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Item>
          <Nav.Link to="/" active={location.pathname === "/"} as={Link}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            to="/config"
            active={location.pathname === "/config"}
            as={Link}
          >
            Config
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/log" active={location.pathname === "/log"} as={Link}>
            Log
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Form inline>
        <Status />
      </Form>
    </Navbar>
  );
}
