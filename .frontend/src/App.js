import React from "react";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import DashBoard from "./dashboard/Dashboard";
import UserList from "./components/UserList";
function App(props) {
  return (
    <Router>
      <Route exact path="/" component={LogIn} />
      <Route path="/login" component={LogIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/users" componant={UserList} props={props} />
      <PrivateRoute path="/dashboard" component={DashBoard} />
    </Router>
  );
}
const mapStateToProps = state => {
  return {
    username: "",
    password: "",
    users: [],
    token: []
  };
};

export default connect(
  mapStateToProps,

  {}
)(App);
