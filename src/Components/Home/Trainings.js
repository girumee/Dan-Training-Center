import React from "react";
// import training from "public/assets/django.png";
function Trainings() {
  return (
    <div className="w-full h-screen px-8">
      <div className="grid grid-cols-1 relative px-auto bg-gray-200 rounded-2xl shadow-md h-screen w-full overflow-scroll ignorescrollbar">
        <h3 className="text-3xl py-4 font-bold text-center text-black">
          Browse our Trainings
        </h3>
        <div className="grid grid-cols-3 relative">
          <h1 className="text-center font-bold py-2 text-black">
            All Trainings
          </h1>
          <h1 className="text-center font-bold py-2 text-black">
            Popular Trainings
          </h1>
          <h1 className="text-center font-bold py-2 text-black">
            Latest Trainings
          </h1>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-2 relative ">
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
              <h1 className="font-bold">Title :</h1>
              <h1 className="font-bold">Description :</h1>
            </div>
          </div>
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
            </div>
            <div className="">
              <h1>Title :</h1>
              <h1 className="">Description :</h1>
            </div>
          </div>
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
            </div>
            <div className="">
              <h1>Title :</h1>
              <h1 className="">Description :</h1>
            </div>
          </div>
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
            </div>
            <div className="">
              <h1>Title :</h1>
              <h1 className="">Description :</h1>
            </div>
          </div>
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
            </div>
            <div className="">
              <h1>Title :</h1>
              <h1 className="">Description :</h1>
            </div>
          </div>
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
            </div>
            <div className="">
              <h1>Title :</h1>
              <h1 className="">Description :</h1>
            </div>
          </div>
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
            </div>
            <div className="">
              <h1>Title :</h1>
              <h1 className="">Description :</h1>
            </div>
          </div>
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
            </div>
            <div className="">
              <h1>Title :</h1>
              <h1 className="">Description :</h1>
            </div>
          </div>
          <div className="w-80 h-auto m-3 p-1 rounded-xl bg-gray-200 shadow-2xl">
            <div className="inline-block">
              <img
                src="/assets/django.png"
                alt="..."
                className="w-80 h-auto rounded-xl"
              />
            </div>
            <div className="">
              <h1>Title :</h1>
              <h1 className="">Description :</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainings;
