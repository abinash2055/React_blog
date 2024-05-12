import React from "react";
import { useState } from "react";
import useAuthContext from "../contexts/AuthContext";
import axios from "../api/axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const { csrf } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
      const response = await axios.post("/forget-password", { email });
      setStatus(response.data.status);
    } catch (e) {
      if (e.response.status == 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  return (
    <section className="bg-[#F4F7FF] py-20 lg-:py-[120px]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
              {status && (
                <div className="bg-green-700 m-2 p-2 rounded text-white">
                  {status}
                </div>
              )}
              <div className="mb-10 text-center md:mb-16">
                Forgot your Password?? Let us know your email address and we
                will email you a password reset link.
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border-[#E9EDF4] w-full rounded-md border bg-[#ECFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                  />
                  {errors.email && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.email[0]}
                      </span>
                    </div>
                  )}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ForgetPassword;
