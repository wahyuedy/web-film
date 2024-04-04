import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError('Your email/password is incorrect');
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="fixed w-full py-24 px-4 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className="py-2 text-red-600 my-1">{error}</p> : null}
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autoComplete="email" />
                <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete="current-password" />
                <button className="bg-[#E72929] rounded px-6 py-3 my-4 mt-3">Sign In</button>
                <div className="flex justify-between items-center text-sm text-gray-700">
                  <p>
                    <input className="mr-3" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="text-gray-400 pt-2">Account Demo : test@test.com</p>
                <p className="text-gray-400">Password : 12345678</p>
                <p className="py-2">
                  <span className="text-gray-700">New to YuFilm?</span>
                  {""}
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
