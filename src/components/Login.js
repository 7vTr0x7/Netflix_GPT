import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constant";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/Redux/userSlice";
import { checkValidData, checkValidName } from "../utils/validate";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [userErrorMsg, setUserErrorMsg] = useState("");

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const clickHandler = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) return;

    if (!isSignIn) {
      // Signed up
      const msg = checkValidName(name.current.value);
      setUserErrorMsg(msg);
      if (msg) return;

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-4/12 bg-black p-12 mt-24 mx-auto right-0 left-0 text-white bg-opacity-85">
        <h1 className="font-bold text-3xl pt-4 pb-8 px-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-3 px-2 m-2 w-full  bg-[#333]"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email"
          className="p-3 px-2 m-2 w-full  bg-[#333]"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 m-2 w-full  bg-[#333]"
        />
        <p className="text-[#EB3932]  ml-3 mt-2 text-lg">
          {userErrorMsg ? userErrorMsg : errorMsg}
        </p>

        <button
          type="submit"
          className="py-3 mt-8 mb-4 mx-2  bg-[#e50914] w-full rounded-lg font-bold text-xl  "
          onClick={clickHandler}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex text-lg  ml-3 mt-2 ">
          <p className=" mr-2 text-[#737373]">
            {isSignIn ? "New to Netflix?" : "Already Registered?"}
          </p>
          <p
            className="cursor-pointer hover:underline"
            onClick={toggleSignInForm}>
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
