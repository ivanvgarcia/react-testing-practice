import React from "react";
import { Navbar, NavItem } from "react-materialize";

const Navigation = () => {
  return (
    <Navbar brand={<a />} fixed={true} alignLinks="right">
      <NavItem>Getting started</NavItem>
      <NavItem href="components.html">Components</NavItem>
    </Navbar>
  );
};

export default Navigation;
