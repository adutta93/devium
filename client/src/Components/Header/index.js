import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../Button";
import { connect } from "react-redux";
import { logout } from "../../Redux/actions/auth.action";

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

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [click, setClick] = useState(false);

  const menuToggle = () => {
    setClick(!click);
  };

  const authUserLink = (
    <Fragment>
      <HamburgerMenu onClick={menuToggle}>
        {click ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <NavMenu onClick={menuToggle} click={click}>
        <NavItem>
          <NavLinks to="/profile">Profile</NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/premium">
            <Button value="Premium" transparent />
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/" onClick={logout}>
            <AiOutlineArrowRight /> Log Out
          </NavLinks>
        </NavItem>
      </NavMenu>
    </Fragment>
  );

  const guestUserLink = (
    <Fragment>
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
          <NavLinks to="/premium">
            <Button value="Premium" transparent />
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/register">
            <Button value="Register" />
          </NavLinks>
        </NavItem>
      </NavMenu>
    </Fragment>
  );

  return (
    <Nav>
      <NavbarContainer>
        <Logo to="/">
          <Icon />
          Devium
        </Logo>

        {!loading && (
          <Fragment>{isAuthenticated ? authUserLink : guestUserLink}</Fragment>
        )}
      </NavbarContainer>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
