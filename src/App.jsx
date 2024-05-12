import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";

import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";

function App() {
  return (
    <>
      <div className="bg-slate-100 text-4xl min-h-screen">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
