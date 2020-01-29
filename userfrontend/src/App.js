import React from "react";
import NavBar from "./Navigation/NavBar";
import SideBar from "./Navigation/SideBar";
import Styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import UserList from "./components/UserList.js";
const SideBarCont = Styled.div`
padding:0.003rem;
width:10%;
`;

function App() {
  return (
    <Router>
      <NavBar />
      <SideBarCont>
        <SideBar />
      </SideBarCont>
      <Route path="/Register" component={SignUp} />
      <Route path="/Login" component={LogIn} />
      <Route path="/Users" component={UserList} />
    </Router>
  );
}

export default App;
