import React from "react";
import { Link } from "react-router-dom";
import TrainingCard from "./TrainingCard";

function Trainings() {
  return (
    <div className="w-full h-screen px-8" id="trainings">
      <div className="grid grid-cols-1 relative px-auto bg-gray-200 rounded-2xl shadow-md h-screen w-full">
        <h3 className="text-3xl py-10 font-bold text-center text-black">
          Browse our Trainings
        </h3>
        <div className="grid grid-cols-3 relative py-4">
          <Link href="/" className="text-end font-bold py-2 ">
            All Trainings
          </Link>
          <Link href="/" className="text-center font-bold py-2">
            Popular Trainings
          </Link>
          <Link href="/" className="text-start font-bold py-2">
            Latest Trainings
          </Link>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-2 relative overflow-scroll ignorescrollbar">
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
        </div>
      </div>
    </div>
  );
}

export default Trainings;
