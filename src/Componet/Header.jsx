import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../Store/slice/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../Utils/constant";
import { toogleGptSearchView } from "../Store/slice/gptSlice";
import { changeLanuage } from "../Store/slice/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    dispatch(toogleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanuage(e.target.value));
  };

  return (
    <div className="flex justify-between absolute w-full px-8 py-2 bg-black z-10">
      <img src={NETFLIX_LOGO} alt="Netflix Logo" className="w-44" />
      {user && (
        <div className="flex items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-black text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 bg-purple-800 rounded-lg text-white my-2"
            onClick={handleGptSearchClick}
          >
            { showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-12 h-12 rounded-full mr-2"
          />
          <button
            onClick={handleSignOut}
            className="border-2 border-transparent bg-transparent text-white px-3 py-1 rounded font-bold hover:bg-gray-800"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
