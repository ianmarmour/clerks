import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  let location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Clerks</Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Item>
          <Nav.Link href="/" active={location.pathname === "/"}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/config" active={location.pathname === "/config"}>
            Config
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/log" active={location.pathname === "/log"}>
            Logs
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
