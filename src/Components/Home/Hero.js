import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen pt-20">
      <div className="w-full h-screen bg-gray-900/70 absolute ">
        <img
          className="w-full h-screen mix-blend-overlay bg-[url('/public/assets/danPic.png')] bg-cover"
          alt="..."
        />
      </div>
      <div className="grid md:grid-cols-1 max-w-[1100px] mx-auto text-white relative">
        <div className="pt-10 flex flex-col justify-between md:items-start w-full px-2 py-8">
          <p className="pt-60 text-8xl font-serif text-center text-slate-50">
            Find the best Trainings and Learn.
          </p>
          <button className="px-20 text-2xl py-3 my-10">Get Started</button>
          <p className="text-2xl font-serif">Learn More ---</p>
        </div>
        <div>
          <search></search>
        </div>
      </div>
    </div>
  );
}

export default Hero;
