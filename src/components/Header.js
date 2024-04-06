import React, { useEffect } from "react";
import logo from "../utils/images/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Redux/userSlice";
import { toggleSearchView } from "../utils/Redux/searchSlice";
import { SUPPORTED_LANG } from "../utils/constant";

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

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleToggleSearch = () => {
    dispatch(toggleSearchView());
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-52 h-24" src={logo} alt="logo" />

      {user && (
        <div className="flex items-center ">
          <select className=" w-auto mx-2 mt-1 p-1  rounded-md text-white bg-black ">
            {SUPPORTED_LANG.map((lang) => (
              <option value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
          <button
            className="text-[#e50914]  rounded-md uppercase font-bold text-2xl bg-gradient-to-t from-black p-1 shadow-2xl  "
            onClick={handleToggleSearch}>
            Search
          </button>
          <img
            className="h-12 w-12 rounded-lg mx-3 shadow-2xl"
            alt="user"
            src={user.photoURL}
          />
          <button
            className="text-[#e50914] font-bold text-xl bg-gradient-to-t from-black p-1 rounded-md uppercase "
            onClick={handleSignOut}>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
