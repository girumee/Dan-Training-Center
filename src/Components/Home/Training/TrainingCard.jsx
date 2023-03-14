import React from "react";

function TrainingCard() {
  return (
    <div className="w-auto h-auto mx-6 m-4 rounded-xl bg-gray-200 shadow-2xl">
      <div className="inline-block">
        <img
          src="/assets/django.png"
          alt="..."
          className="w-auto h-auto rounded-tr-xl rounded-tl-xl"
        />
        <div className="grid grid-cols-2 mx-4 my-2 text-xs">
          <h1 className="font-bold text-start">Title : {}</h1>
          <h1 className="font-semibold text-end">Days : {}</h1>
        </div>
        <h1 className="text-bold text-justify mx-4">
          Description : This is SoftSkill Training.
        </h1>
        <div className="grid grid-cols-2 gap-10 px-2 py-4">
          <div className="align-baseline">
            <img
              src="/assets/teacher1.png"
              alt="..."
              className="w-16 h-16 rounded-full inline"></img>
            <span> John Doe</span>
          </div>
          <button className="px-2 py-2">Join now</button>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;
