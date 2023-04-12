import TraineeLayer from '../../Layer/TraineeLayer';
import {BsCalendar2Check, BsThreeDots} from 'react-icons/bs';
import React, {useRef, useEffect} from "react";

export default function TraineeDashboard() {
    const myElementRef = useRef(null);
    useEffect(() => {
        if (myElementRef.current) {
            const height = myElementRef.current.offsetHeight;
            console.log(height);
        }
    }, []);
    
    return <TraineeLayer>
        <div className='h-[100%]'>
            <div ref={myElementRef} className='bg-[#E7E6F2] p-3 flex gap-3 mx-3 rounded-lg'>
                <div className='bg-white w-full rounded-lg p-3'>
                    <p>Overview</p>
                    <div className='flex gap-20'>
                        <div className='ml-5 w-[20%] text-center'>
                            <div
                                className='rounded-full border-[#5D5A88] border-r-[#E7E6F2] border-[16px] w-fit mx-auto'>
                                <div className='bg-white w-20 h-20 rounded-full place-content-center grid'>
                                    <div className='text-lg font-semibold'>75%</div>
                                </div>
                            </div>
                            <p className='text-lg'>Current progress</p>
                        </div>
                        <div className='w-full'>
                            <div className='flex w-full text-lg gap-4'>
                                <div className='w-[60%] rounded-lg justify-center bg-[#DCD6FF] py-3 flex'>
                                    <p>Submitted Assignments</p>
                                    <div className='px-2 rounded-md ml-3 bg-white w-fit h-fit font-semibold'>5</div>
                                </div>
                                <div className='w-[40%] rounded-lg justify-center bg-[#D6FFEF] py-3 flex'>
                                    <p>Graded Assignments</p>
                                    <div className='px-2 rounded-md ml-3 bg-white w-fit h-fit font-semibold'>5</div>
                                </div>
                            </div>
                            <div className='flex w-full text-lg gap-4 mt-4'>
                                <div className='w-[40%] rounded-lg justify-center bg-[#DCD6FF] py-3 flex'>
                                    <p>Completed Exams</p>
                                    <div className='px-2 rounded-md ml-3 bg-white w-fit h-fit font-semibold'>5</div>
                                </div>
                                <div className='w-[60%] rounded-lg justify-center bg-[#D6FFEF] py-3 flex'>
                                    <p>Completed Trainings</p>
                                    <div className='px-2 rounded-md ml-3 bg-white w-fit h-fit font-semibold'>5</div>
                                </div>
                            </div>
                            <div className='flex w-full'></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-[30%] rounded-lg p-3'>
                    <p>Reminder</p>
                    <div
                        className='w-full rounded-lg justify-between px-3 bg-[#5D5A88] py-3 flex text-lg text-white mt-2'>
                        <BsCalendar2Check className='text-2xl'/>
                        <p>Assignment Due Date</p>
                        <p>2/11/23</p>
                    </div>
                    <div
                        className='w-full rounded-lg justify-between px-3 bg-[#5D5A88] py-3 flex text-lg text-white mt-2'>
                        <BsCalendar2Check className='text-2xl'/>
                        <p>Exam</p>
                        <p>2/11/23</p>
                    </div>
                </div>
            </div>
            <div className='w-full overflow-y-scroll px-5 mt-4 h-[70%]'>
                {/* cards */}
                <div className='bg-[#F2F1FA] w-full my-2 pt-2 pb-0 rounded-lg'>
                    <div className='flex gap-2 w-full justify-end pr-4'>
                        <p>1 hour ago</p>
                        <BsThreeDots/>
                    </div>
                    <div className='text-lg px-5 mt-2 mx-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='flex w-full mt-3'>
                        <div className='bg-white  pl-3 '>
                            <div className='border-b-4 border-b-blue-500 rounded-full p-1 -mt-7'>
                                <img
                                    src='/assets/trainer.png'
                                    alt=''
                                    className='rounded-full w-12 h-12 object-cover'/>
                            </div>
                        </div>
                        <div className='pl-0 self-end'>
                            <p className='font-semibold text-lg bg-white pl-2 pr-10 rounded-tr-lg w-fit'>John Doe</p>
                            <p className=' bg-white pl-2 pr-40 rounded-tr-lg'>Trainer</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F2F1FA] w-full my-2 pt-2 pb-0 rounded-lg'>
                    <div className='flex gap-2 w-full justify-end pr-4'>
                        <p>1 hour ago</p>
                        <BsThreeDots/>
                    </div>
                    <div className=' flex text-lg px-5 mt-4 ml-4 '>
                        <div>
                            <p className='text-xl font-bold'>Event Title</p>
                            <div className='mr-10'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <div className='w-[100%] rounded-lg'>
                            <img alt='' src='/assets/abebe.png' className='object-cover'/>
                        </div>
                    </div>
                    <div className='flex w-full mt-3'>
                        <div className='bg-white  pl-3 '>
                            <div className='border-b-4 border-b-blue-500 rounded-full p-1 -mt-7'>
                                <img
                                    src='/assets/trainer.png'
                                    alt=''
                                    className='rounded-full w-12 h-12 object-cover'/>
                            </div>
                        </div>
                        <div className='pl-0 self-end'>
                            <p className='font-semibold text-lg bg-white pl-2 pr-10 rounded-tr-lg w-fit'>John Doe</p>
                            <p className=' bg-white pl-2 pr-40 rounded-tr-lg'>Trainer</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F2F1FA] w-full my-2 pt-2 pb-0 rounded-lg'>
                    <div className='flex gap-2 w-full justify-end pr-4'>
                        <p>1 hour ago</p>
                        <BsThreeDots/>
                    </div>
                    <div className='text-lg px-5 mt-2 mx-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='flex w-full mt-3'>
                        <div className='bg-white  pl-3 '>
                            <div className='border-b-4 border-b-blue-500 rounded-full p-1 -mt-7'>
                                <img
                                    src='/assets/trainer.png'
                                    alt=''
                                    className='rounded-full w-12 h-12 object-cover'/>
                            </div>
                        </div>
                        <div className='pl-0 self-end'>
                            <p className='font-semibold text-lg bg-white pl-2 pr-10 rounded-tr-lg w-fit'>John Doe</p>
                            <p className=' bg-white pl-2 pr-40 rounded-tr-lg'>Trainer</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F2F1FA] w-full my-2 pt-2 pb-0 rounded-lg'>
                    <div className='flex gap-2 w-full justify-end pr-4'>
                        <p>1 hour ago</p>
                        <BsThreeDots/>
                    </div>
                    <div className='text-lg px-5 mt-2 mx-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='flex w-full mt-3'>
                        <div className='bg-white  pl-3 '>
                            <div className='border-b-4 border-b-blue-500 rounded-full p-1 -mt-7'>
                                <img
                                    src='/assets/trainer.png'
                                    alt=''
                                    className='rounded-full w-12 h-12 object-cover'/>
                            </div>
                        </div>
                        <div className='pl-0 self-end'>
                            <p className='font-semibold text-lg bg-white pl-2 pr-10 rounded-tr-lg w-fit'>John Doe</p>
                            <p className=' bg-white pl-2 pr-40 rounded-tr-lg'>Trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TraineeLayer>
}