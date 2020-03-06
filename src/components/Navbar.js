import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

const Logo = styled.h1`
  font-size: 3rem;
  a {
    padding: 0.5rem 1rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  padding: 1rem 1.5rem 0px;

  .nav-links {
    a {
      color: white;
      text-decoration: none;
      padding: 1em 1em;
      font-size: 1.333rem;
    }
  }
`;

const NavBarComponent = () => (
  <StyledHeader>
      <Logo>
        <Link to="/">
          <a>Three Wishes Entertainment</a>
        </Link>
      </Logo>
      <ul className="nav-links">
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/gallery">
          <a>Gallery</a>
        </Link>
        <Link to="/services">
          <a>Services</a>
        </Link>
        <Link to="/faq">
          <a>FAQ</a>
        </Link>
        <Link to="/contact">
          <a>Contact</a>
        </Link>
      </ul>
  </StyledHeader>
);

export default NavBarComponent;
