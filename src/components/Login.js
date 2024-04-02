import React from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constant";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={BACKGROUND_IMAGE} alt="background-img" />
      </div>
    </div>
  );
};

export default Login;
