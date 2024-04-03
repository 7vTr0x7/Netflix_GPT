import React, { useEffect } from "react";
import logo from "../utils/images/logo.png";
import userIcon from "../utils/images/user.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/Redux/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="h-20" src={logo} alt="logo" />

      {user && (
        <div className="flex p-4">
          <img
            className="h-12 shadow-2xl mx-5 "
            src={userIcon}
            alt="user-icon"
          />
          <button
            className="text-white font-bold text-lg  shadow-xl bg-none"
            onClick={handleSignOut}>
            {"SignOut"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
