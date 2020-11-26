import React from "react";
import "./Navbar.scss";

import { Link, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  return (
    <nav className="nav">
      <div onClick={() => history.push("/")} className="nav-logo-section">
        <img src={process.env.PUBLIC_URL + "/calculator.svg"} alt="" />
        <span className="companyName">
          <span className="line-1">We Make</span>
          <span className="line-2">Better</span>
          <span className="line-3">Invoice</span>
        </span>
      </div>

      <div className="nav-menus">
        <ul className="nav-menus-list">
          {/* <li className="nav-menus-list-item">
            <Link className="nav-menus-list-item-link" to="/profile">
              profile
            </Link>
          </li> */}
          <li className="nav-menus-list-item">
            <Link className="nav-menus-list-item-link" to="/login">
              Log In
            </Link>
          </li>
          <li className="nav-menus-list-item">
            <Link className="nav-menus-list-item-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
        {/* <div className="user">
          <span className="user-name">B.P & SONS</span>
        </div> */}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
