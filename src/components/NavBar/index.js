import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>Header</Navbar.Brand>
    </Navbar>
  );
}

export default Header;