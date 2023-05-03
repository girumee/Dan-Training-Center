import TraineeLayer from '../../Layer/TraineeLayer';
import React, {useState} from "react";
import TraineeProfilePart1, {
    TraineeProfilePart0,
    TraineeProfilePart2,
    TraineeProfilePart3,
    TraineeProfilePart4,
    TraineeProfilePart5,
    TraineeProfilePart6
} from './TraineeProfileParts';
import {Link} from 'react-router-dom';
import {BsPhone} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

export default function TraineeProfile() {
    const [part,
        setPart] = useState(0);

    function changePart() {
        setPart(part + 1);
    }
    let Page;
    switch (part) {
        case 0:
            Page = TraineeProfilePart0;
            break;
        case 1:
            Page = TraineeProfilePart1;
            break;
        case 2:
            Page = TraineeProfilePart2;
            break;
        case 3:
            Page = TraineeProfilePart3;
            break;
        case 4:
            Page = TraineeProfilePart4;
            break;
        case 5:
            Page = TraineeProfilePart5;
            break;
        case 6:
            Page = TraineeProfilePart6;
            break;
        default:
            Page = TraineeProfilePart1;
    }
    console.log('this is part'+part);

    return <TraineeLayer>
        <div className='h-[100%] bg-gray-300 pt-24'>
            <div className={`${part===0? 'w-5/6' : 'w-3/4'} bg-[#40147cfa] mx-auto  p-3 rounded-3xl flex`}>
                <Page>
                    {part === 6
                        ? <div className='flex w-full'>
                                <div className='flex w-24 h-fit gap-x-4 mt-4 pt-0.5 text-white'>
                                    <input type='checkbox' className='w-5'/>
                                    <p>I Agree</p>
                                </div>
                                <div className='w-full'>
                                    <Link to={'/TraineeDashboard'} className='w-[40%]'>
                                        <div
                                            className='text-white font-bold text-center my-3 py-2 bg-[#742BDA] rounded-lg shadow-md w-[40%] mx-auto text-lg'
                                            onClick={changePart}>
                                            Finish</div>
                                    </Link>
                                </div>
                            </div>
                        : <div
                            className='text-white font-bold text-center my-3 py-2 bg-[#742BDA] rounded-lg shadow-md w-[40%] mx-auto text-lg'
                            onClick={changePart}>
                            Next</div>}
                </Page>
                
                {part>0? <div></div> : <div className=' w-[30%]'>
                    {/* right side div */}
                    <div class="flex flex-col items-center justify-center pl-[10%] px-[5%]">
                        <img
                            class="w-32 h-32 rounded-full object-cover border-4 border-white mb-2"
                            src="assets/profile.png"
                            alt="Avatar"/>
                        <h1 class="text-3xl font-bold mb-1 text-white">Jone Doe</h1>
                        <h4 class=" text-white">@Jone Doe</h4>
                    </div>

                    <div class="pl-2 mt-4 text-lg">
                        <div class="flex w-full pl-20">
                            <div class="mr-2 flex items-center">
                                <BsPhone className="text-white"/>
                                <span class="ml-2 text-white">Phone</span>
                            </div>
                            <p className="text-white">+2519345644</p>
                        </div>

                        <div class="flex w-full pl-20">
                            <div class="mr-2 flex items-center">
                                <MdEmail className="text-white"/>
                                <span class="ml-2 text-white">Email</span>
                            </div>
                            <p className="text-white">Example@gmial.com</p>
                        </div>

                        <div class="flex justify-center pt-4">
                            <button
                                onClick={changePart}
                                class="p-4 bg-[#742BDA] hover:bg-transparent text-white py-1 px-8 rounded border border-[#742BDA]-500 w-200">
                                Edit Profile
                            </button>
                        </div>

                        <div class="flex justify-center pt-2">
                            <button
                                class="text-white py-1 px-7 rounded border border-[#742BDA]-500 hover:bg-purple-600 w-200">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </TraineeLayer>
}