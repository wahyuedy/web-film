import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="bg-black/60 fixed top-0 left-0 h-screen w-full"></div>
        <div className="fixed w-full py-24 px-4 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autoComplete="email" />
                <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete="current-password" />
                <button type="submit" className="bg-[#E72929] rounded px-6 py-3 my-4 mt-3">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-700">
                  <p>
                    <input className="mr-3" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-700">Already subscribed to YuFilm?</span>
                  {""}
                  <Link to="/login"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
