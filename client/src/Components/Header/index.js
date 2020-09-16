import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Button";
import {
  Nav,
  NavbarContainer,
  Logo,
  Icon,
  HamburgerMenu,
  NavMenu,
  NavLinks,
  NavItem,
} from "./index.style";
const Header = () => {
  const [click, setClick] = useState(false);

  const menuToggle = () => {
    setClick(!click);
  };
  return (
    <Nav>
      <NavbarContainer>
        <Logo to="/">
          <Icon />
          Devium
        </Logo>
        <HamburgerMenu onClick={menuToggle}>
          {click ? <FaTimes /> : <FaBars />}
        </HamburgerMenu>
        <NavMenu onClick={menuToggle} click={click}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/blog">Blog</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/signin">Sign In</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/register">
              <Button value="Get Started" />
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
