import ResultCard from "./ResultCard";
import Lottie from 'lottie-react';
import rating from '../../../rating.json';
import trainer from '../../../activeTrainer.json';
import trainee from '../../../trainee.json';

export default function resourceLimits() {
  return (
    <div className="w-full h-screen py-5 mt-5">
      <h2 className="text-3xl text-center">Our results in numbers</h2>
      <div className="flex gap-16 my-4 items-center justify-center">
        <ResultCard
          image1=<Lottie animationData={rating}/>
          name="satisfaction"
          number="99"
          title="Customer satisfaction"
          text="Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto."
        />
        <ResultCard
          image1=<Lottie animationData={trainer} />
          name=""
          number="10"
          title="Active Trainers"
          text="Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto."
        />
        <ResultCard
          image1=<Lottie animationData={trainee} />
          name=""
          number="300"
          title="Active Trainee"
          text="Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto."
        />
      </div>
    </div>
  );
}
