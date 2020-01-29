import React from "react";
import NavBar from "./Navigation/NavBar";
import SideBar from "./Navigation/SideBar";
import Styled from "styled-components";

const SideBarCont = Styled.div`
padding:0.003rem;
width:10%;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <SideBarCont>
        <SideBar />
      </SideBarCont>
    </div>
  );
}

export default App;
