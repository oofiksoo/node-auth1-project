import React from "react";
import Styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import Logo from "./logo.js";
const NavBarContainer = Styled.div`
display:flex;
background-color:#0099cc;
padding:1%;
width:90%;
justify-content:flex-end;
}
`;
const NavBarItem = Styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding: 0.5rem;
  margin: .5rem 1.3rem;
  height:.8vh;
  width:6%;
  color: #cc3300;
  border: 2px solid white;
  border-radius:.5rem;
  p{
    text-decoration:none;
    color:white;
    font-size:.7rem;
  }
  a{
    text-decoration:none;
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <Logo />
      <NavBarItem>
        <NavLink exact to="/">
          <p>Home</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="">
          <p>Projects</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/Users">
          <p>Users</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/Register">
          <p>Register</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/Login">
          <p>Login</p>
        </NavLink>
      </NavBarItem>
      <Route exact path="/" />
    </NavBarContainer>
  );
}
export default NavBar;
