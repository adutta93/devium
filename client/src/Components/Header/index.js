import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
        <NavMenu>
          <NavItem>
            <NavLinks to="/">
              <p>Home</p>
            </NavLinks>

            <NavLinks to="/blog">Blog</NavLinks>

            <NavLinks to="/login">Sign In</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
