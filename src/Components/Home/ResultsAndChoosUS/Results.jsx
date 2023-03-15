import ResultCard from './ResultCard';

export default function resourceLimits() {
    return <div className="w-full h-screen py-5 mt-5">
        <h2 className="text-3xl text-center">Our results in numbers</h2>
        <div className='flex gap-16 my-4 items-center justify-center'>
            <ResultCard image1='/assets/emoji.jpg' number="99%" title="Customer satisfaction" text="Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto."/>
            <ResultCard image1='/assets/activeTrainer.png' number="10" title="Active Trainers" text="Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto."/>
            <ResultCard image1='/assets/activeTrainee.png' number="300" title="Active Trainee" text="Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto."/>
        </div>
    </div>
}