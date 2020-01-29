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
const ContentContainer = Styled.div`
padding:1%;
width:80%;
`;
const BodyContainer = Styled.div`
display:flex;
`;

function App() {
  return (
    <Router>
      <NavBar />
      <BodyContainer>
        <SideBarCont>
          <SideBar />
        </SideBarCont>
        <ContentContainer>
          <Route path="/Register" component={SignUp} />
          <Route path="/Login" component={LogIn} />
          <Route path="/Users" component={UserList} />
        </ContentContainer>
      </BodyContainer>
    </Router>
  );
}

export default App;
