import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HomePage from "../pages/homepage/HomePage";
import AuthPage from "../pages/authpage/AuthPage";

import "./EntryPoint.scss";

const EntryPoint = () => {
  return (
    <div className="entry-point">
      <Navbar />
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={AuthPage} />
          <Route path="/register" component={AuthPage} />
        </Switch>
      </div>
    </div>
  );
};

export default EntryPoint;
