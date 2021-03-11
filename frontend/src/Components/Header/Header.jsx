import React from "react";
import "./header.css";
import bg from "../../Photos/bg-h.jpg";
import Nav from "../NavBar/NavBar";

const Header = () => {
  return (
    <div id="Home" className="header">
      <Nav />
      <img className="header__pic" src={bg} alt="bg" />

      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Hello !</span>
            <span>I'm Sara Boshnaq</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>FrontEnd Developer</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
