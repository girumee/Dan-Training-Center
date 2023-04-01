import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full h-screen py-0" id="home">
      <img
        className="w-full h-screen bg-[url('/public/assets/danPic.png')] bg-cover"
        alt="..."
      />
      <div className="absolute w-full h-screen left-0 top-20 bg-gray-900/70"></div>
      <div className="absolute w-full h-full top-10 flex flex-col justify-center text-center text-white p-4">
        <h1 className="font-bold text-8xl grid grid-cols-1 my-10">
          Find the best Trainings <br /> and Learn.
        </h1>
        <div className="flex text-center mx-auto gap-2">
          <Link to="/register">
            {" "}
            <button className="text-2xl py-2 my-6 text-center w-48">
              Get Started
            </button>
          </Link>
          <p className="text-2xl py-2 my-6 w-48">Learn More ---</p>
        </div>
        <form className="flex justify-between items-center max-w-[700px] py-4 mx-auto mt-20 w-full border p-1 rounded-full bg-gray-100/10">
          <input
            className="text-lg bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
            type="search"
            name="search"
            id="search"
            placeholder="What do you want to Search?"
            // className="relative x-10 bg-transparent w-12 h-12 rounded-full border "
          />
          <button>{/* <BsSearch /> */}</button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
