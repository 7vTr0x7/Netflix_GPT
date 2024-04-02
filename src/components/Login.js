import React from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constant";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background-img" />
      </div>
      <form className=" absolute w-3/12 bg-black p-12 mt-36 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="font-bold text-3xl pt-4 pb-8 px-2">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="p-3 px-2 m-2 w-full  bg-[#333]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-full  bg-[#333]"
        />
        <button className="py-3 mt-8 mb-4 mx-2  bg-[#e50914] w-full rounded-lg font-bold text-xl  ">
          Sign In
        </button>
        <div className="flex text-lg  ml-3 mt-2 ">
          <p className=" mr-2 text-[#737373]">{"New to Netflix?"}</p>
          <p className="cursor-pointer hover:underline">{"Sign Up Now"}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
