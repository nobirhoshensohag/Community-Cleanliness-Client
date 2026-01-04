import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser, signOutFunc } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Sign Out Success");
        setUser(null);
      })
      .catch((err) => toast.error(err.message));
  };

  // ✅ ONLY PUBLIC LINKS
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/issues">All Issues</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-white/50 dark:bg-base-100/50 shadow-sm sticky top-0 z-50 backdrop-blur-md p-4">
      <Container className="flex">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 w-52 bg-white dark:bg-base-100 shadow rounded-box">
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="btn bg-transparent border-none text-2xl font-bold"
          >
            Clean <span className="text-accent">Hub</span>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          {/* Theme toggle */}
          <input
            type="checkbox"
            className="toggle"
            checked={theme === "dark"}
            onChange={(e) => handleTheme(e.target.checked)}
          />

          {/* User */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <img
                  className="w-10 h-10 rounded-full ring-2 ring-primary"
                  src={
                    user?.photoURL?.startsWith("http")
                      ? user.photoURL
                      : "https://i.ibb.co/CpHdF8h/icons8-user.gif"
                  }
                  alt="profile"
                />
              </label>

              {/* ✅ DASHBOARD MENU */}
              <ul className="menu dropdown-content mt-3 w-52 bg-white dark:bg-base-100 shadow rounded-box">
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                
                

                <li>
                  <button onClick={handleSignOut} className="text-error">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">Sign In</Link>
              <Link to="/register" className="btn btn-outline hidden sm:block">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;