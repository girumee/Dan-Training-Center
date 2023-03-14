import TrainerCard from "./TrainerCards";

export default function TrainerPage(){
    return <div className="bg-[url('/public/assets/trainerBG.jpg')] bg-white/30 w-full h-2x bg-no-repeat bg-cover pt-10 mt-4 backdrop-opacity-10">
   <h2 className="font-bold sm:text-lg md:text-2xl lg:text-4xl text-center">Meet our team members</h2>
   <p className="w-1/2 mx-auto my-3 text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer nam.</p>
   <div className="grid grid-cols-3 gap px-52">
   <TrainerCard />
   <TrainerCard />
   <TrainerCard />
   <TrainerCard />
   <TrainerCard />
   <TrainerCard />
   </div>
   <div className="h-20">
   </div>
    </div>
}