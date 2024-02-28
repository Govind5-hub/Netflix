import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../Store/slice/userSlice";
import { NETFLIX_LOGO } from "../Utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
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
    //unsubscribe component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className=" flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b  from-black z-10">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
      {user && (
        <div className="flex p-2">
          <img src={user?.photoURL} alt="logo" className="w-12 h-12" />
          <button
            onClick={handleSignOut}
            className="border 2px bg-black text-white px-2 py-2 font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
