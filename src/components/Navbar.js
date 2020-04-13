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
  align-items: center;
  flex-wrap: wrap;
  padding: .75rem 1.5rem;

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
          Three Wishes Entertainment
        </Link>
      </Logo>
      <ul className="nav-links">
        <Link to="/">
          Home
        </Link>
        <Link to="/gallery">
          Gallery
        </Link>
        <Link to="/services">
          Services
        </Link>
        <Link to="/faq">
          FAQ
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </ul>
  </StyledHeader>
);

export default NavBarComponent;
