import React from "react";
import Styled from "styled-components";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

const LoginContainer = Styled.div`
display:flex;
flex-direction:column;
background-color:#0099cc;
padding:1%;
width:60%;
justify-content:center;
border-radius:20px;
}
`;
const Login = ({ errors, touched, values, userLogin, history }) => {
  const handleLoginSubmit = e => {
    console.log("in handleLoginSubmit", values);

    e.preventDefault();

    userLogin(values, history);
  };
  const handleclose = () => {
    history.goBack();
  };
  return (
    <LoginContainer>
      <div className="xclose" onClick={handleclose}>
        X
      </div>
      <Form className="login-form" onSubmit={handleLoginSubmit}>
        <label className="login-label"> Username: </label>
        <Field
          className="login-field"
          type="username"
          name="username"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <span className="error"> {errors.username} </span>
        )}
        <label className="login-label"> Password: </label>
        <Field
          className="login-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <span className="error"> {errors.password} </span>
        )}
        <button> Login </button>
      </Form>
    </LoginContainer>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",

      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required"),

    password: Yup.string()

      .min(4, "Need at least 4 characters")

      .required("Password is required")
  })
})(Login);

export default connect(state => state, actionCreators)(FormikLogin);
