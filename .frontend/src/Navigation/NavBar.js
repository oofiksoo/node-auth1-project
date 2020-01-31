import React from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import Logo from "./logo.js";
import { userLogout } from "../actions/actionCreators";
const NavBarContainer = Styled.div`
display:flex;
background-color:#0099cc;
padding:1%;
width:90%;
justify-content:flex-end;
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

function NavBar(props) {
  return (
    <NavBarContainer>
      <Logo />
      <NavBarItem>
        <NavLink exact to="/">
          <p>Home</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/Logout" onClick={() => props.userLogout()}>
          <p>Log Out</p>
        </NavLink>
      </NavBarItem>
      <NavBarItem>
        <NavLink to="/users">
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
const mapStateToProps = state => {
  return {
    users: state.users,
    usertransaction: state.usertransaction
  };
};
export default connect(mapStateToProps, { userLogout })(NavBar);
