import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[90px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between item-center w-full h-full">
        <div className="flex items-center w-3/4 justify-between">
          <Link to="/dashboard">
            <img src="assets/logo.svg" alt="Dan Training Center" />
          </Link>
          <ul className="hidden md:flex">
            <li>
              <HashLink to="/#home">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#trainers">Trainers</HashLink>
            </li>
            <li>
              <HashLink to="/#trainings">Trainings</HashLink>
            </li>
            <li>
              <HashLink to="/#chooseus">Why Choose Us</HashLink>
            </li>
            <li>
              <HashLink to="/#getintouch">Contact Us</HashLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex p-6 w-1/4">
          <div className="mt-1 mr-8 h-10 border-l-2 border-black"></div>
          <Link to="/login">
            <button className="px-10 py-2 bg-transparent text-black mr-2">
              LogIn
            </button>
          </Link>
          <Link to="/register">
            <button className="px-8 py-2">Register</button>
          </Link>
        </div>
        <div className="md:hidden pr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">Trainings</li>
        <li className="border-b-2 border-zinc-300 w-full">Why Choose Us</li>
        <li className="border-b-2 border-zinc-300 w-full">Contact Us</li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3 bg-transparent text-purple-500 mb-4">
            <Link to="/login">LogIn</Link>
          </button>
          <button className="px-8 py-3">
            <Link to="/">Register</Link>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
