
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
export default function TrainerCard(){
    return <div className="bg-slate-50 w-80 h-auto border-gray-200 border m-3 p-3 pt-4 rounded-xl shadow-xl">
        <div className='text-start'>
        <img src='/assets/trainer.png' alt="trainer" className="w-28 h-28 inline rounded-3xl "></img>
        <div className='inline-block w-auto absolute mt-12 ml-2'>
        <h2 className='text-xl'>John Doe</h2>
        <h4>Trainer</h4>
        </div>
        <p className='text-justify my-2'>Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. </p>
        <div className='flex gap-3 my-2'>
        <div className='p-1 bg-slate-200 rounded-md'><FaFacebookF /></div>        
        <div className='p-1 bg-slate-200 rounded-md'><FaInstagram /></div>
        <div className='p-1 bg-slate-200 rounded-md'><FaTwitter /></div>
        <div className='p-1 bg-slate-200 rounded-md'><FaLinkedinIn /></div>
        </div>
        </div>
    </div>
}