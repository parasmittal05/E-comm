import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav"

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="">
        <img src="./images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <Nav/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0.5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 10rem; /* Adjust the height here */
    width: auto; /* Ensures the aspect ratio is maintained */
  }
`;

export default Header;
