import React, { Component } from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import "./AuthPage.scss";
import TextInput from "../../components/form-inputs/TextInput";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeInput = (e) => {
    e.preventDefault();

    this.setState({ [`${e.target.id}`]: e.target.value });
  };

  registerFormSub = (e) => {
    e.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    const { match } = this.props;

    return (
      <div className="auth-page">
        <form className="auth-page-form" onSubmit={this.registerFormSub}>
          <h4 className="auth-page-form-header">
            {match.path === "/register" ? "Register" : "Login"}
          </h4>
          <TextInput
            id="email"
            label="Email"
            placeholder="Example: user@user.com"
            onChange={this.onChangeInput}
            value={email}
            type="email"
            required
          />
          <TextInput
            id="password"
            label="Password"
            placeholder="Your Account Password"
            onChange={this.onChangeInput}
            value={password}
            required
          />
          <CustomButton
            className="normal"
            buttonText={match.path === "/register" ? "Register" : "Login"}
            type="submit"
          />
          <span className="choose">Or</span>
          <CustomButton className="google" buttonText="Continue With Google" />

          <div className="auth-page-form-footer">
            {match.path === "/register" && (
              <Link to="/login">Already have an account? Log In</Link>
            )}
            {match.path === "/login" && (
              <Link to="/register">Don't have an account? Register</Link>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
