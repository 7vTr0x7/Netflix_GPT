import React from "react";
import logo from "../utils/images/logo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="h-24" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
