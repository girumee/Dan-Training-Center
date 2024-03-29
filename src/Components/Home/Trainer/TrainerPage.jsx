import TrainerCard from "./TrainerCards";

export default function TrainerPage() {
  return (
    <div
      className="bg-[url('/public/assets/trainerBG.jpg')] w-full bg-no-repeat bg-cover  mt-4"
      id="trainers">
      <div className="absolute bg-gray-300 w-full h-full bg-opacity-80 pt-10"></div>
      <div className="absolute pt-10 text-center w-full">
        <h2 className="font-bold sm:text-lg md:text-2xl lg:text-4xl text-center">
          Meet our team members
        </h2>

        <div className="grid grid-cols-3 gap-x-16 mx-[20%]">
          <TrainerCard />
          <TrainerCard />
          <TrainerCard />
          <TrainerCard />
          <TrainerCard />
          <TrainerCard />
        </div>
        <div className="h-20"></div>
      </div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
