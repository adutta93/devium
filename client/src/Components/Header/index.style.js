import styled from "styled-components";
import { Container } from "../../index.globalStyle";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  /* background: #101522; */
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const Logo = styled(Link)`
  /* color: #fff; */
  display: flex;
  font-family: Serif;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Icon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    /* color: white; */
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 0.5rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    width: 100%;
    height: 90vh;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    /* background: #101522; */
    background: #fff;
    cursor: pointer;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  font-size: 1rem;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%auto;
  }
  &:hover {
    border: none;
  }
`;

export const NavLinks = styled(Link)`
  /* color: #fff; */
  display: flex;
  font-family: Serif;
  /* justify-content: center; */
  font-size: 1.3rem !important;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  height: 100%;
  
  cursor: pointer;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
  }
  &:hover {
    border-bottom: 4px solid #03a87c;
    color: #03a87c;
    transition: all 0.3s ease;
  }
`;
