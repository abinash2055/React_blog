import { useState } from "react";
import React from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = ueState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/login", { email, password });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section className="bg-[#F4F7FF] py-20 lg-:py-[120px]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                Personal Signature
              </div>
              <form>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-[#E9EDF4] w-full rounded-md border bg-[#ECFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">Error</span>
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-[#E9EDF4] w-full rounded-md boder bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">Error</span>
                  </div>
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-indigo-700 hover:bg-purple-900 rounded-md text-white"
                  >
                    Login
                  </button>
                </div>
              </form>
              <Link
                to="/forget-password"
                className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
              >
                Forgot Password
              </Link>
              <p className="text-base text-[#adadad]">
                Are You not a Member Yet?
                <Link to="/register" className="ext-primary hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
