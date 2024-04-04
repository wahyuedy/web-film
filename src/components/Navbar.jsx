import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-[#E72929] text-2xl font-bold cursor-pointer md:text-4xl">YuFilm</h1>
      </Link>
      {user?.email ? (
        <div className="">
          <Link to="/account">
            <button className="text-white pr-4 text-sm md:text-base transition ease-in-out hover:scale-95">Account</button>
          </Link>
          <button onClick={handleLogOut} className="bg-[#E72929] text-white text-sm px-3 py-1 cursor-pointer rounded md:px-6 md:py-2 md:text-base transition ease-in-out hover:scale-95">
            Log Out
          </button>
        </div>
      ) : (
        <div className="">
          <Link to="/login">
            <button className="text-white pr-4 text-sm md:text-base transition ease-in-out hover:scale-95">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#E72929] text-white text-sm px-3 py-1 cursor-pointer rounded md:px-6 md:py-2 md:text-base transition ease-in-out hover:scale-95">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
