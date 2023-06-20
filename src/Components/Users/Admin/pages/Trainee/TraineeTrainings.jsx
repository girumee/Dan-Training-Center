import TraineeLayer from '../../Layer/TraineeLayer';
import {FaDownload} from "react-icons/fa";
import {BiTimeFive} from 'react-icons/bi';
import {MdOutlineTimer} from 'react-icons/md';
import {TbChecklist} from 'react-icons/tb';
import {BsJournalCheck, BsCheck2Circle, BsCalendar2Check} from 'react-icons/bs';
import {RxDownload} from 'react-icons/rx';

export default function TraineeTrainings() {

    return <TraineeLayer>
        <div className='h-[100%] overflow-y-scroll'>
            <div className='w-full h-2/3 pl-10 pr-4 mb-32'>
                <p>Now Studying
                    <b className='text-lg'>Soft Skill</b>
                </p>
                <p className='text-2xl font-bold'>The Title</p>
                <div className='flex h-full'>
                    <div className='w-4/6 h-full'>
                        <iframe
                            className="h-full w-full rounded-xl"
                            src={`https://www.youtube.com/embed/0FFLFcB9xfQ`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"></iframe>
                    </div>
                    <div className='shadow-md h-full w-2/6 rounded-lg pl-2 pt-16'>
                        <div className='flex gap-3 text-lg ml-5'>
                            <div>Notes</div>
                            <div>Quize</div>
                            <div className='flex gap-1'>Resources<FaDownload/></div>
                        </div>
                        <div className='h-5/6 m-3 border-2 border-gray-300 rounded-lg p-3 text-base'>
                            What is the difference between hard skills and soft skills? Hard skills refer to
                            the job-related knowledge and abilities that employees need to perform their job
                            duties effectively. Soft skills, on the other hand, are the personal qualities
                            that help employees really thrive in the workplace.
                        </div>
                    </div>
                </div>
                <div className='flex w-4/6 justify-between pl-2 pr-8 pt-2'>
                    <div className='flex'>
                        <div className='rounded-full border-2 border-purple-600 w-12 h-12'></div>
                        <div className='ml-2 mt-1.5'>
                            <p className='font-bold text-base'>John Doe</p>
                            <p>Soft Skill</p>
                        </div>
                    </div>
                    <div className='flex text-xl'>
                        <div className='pt-0.5 pr-1 text-2xl'><BiTimeFive/></div>
                        <p>01:52</p>
                    </div>
                </div>
            </div>
            {/* the bottom part */}
            <div className='w-full px-10 h-1/3'>
                <div className='flex gap-10 text-lg'>
                    <p>Progress</p>
                    <p>Latest Videos</p>
                    <p>Related Content</p>
                    <p>Library</p>
                </div>
                <div className='h-1 bg-gray-400 w-full'></div>
                <div className='flex pt-4 justify-evenly'>
                    <div
                        className='p-8 rounded-full shadow-[inset_2px_0px_16px_4px_rgb(0,0,0,0.25)] h-fit'>
                        <div
                            className='w-24 h-24 rounded-full shadow-[2px_0px_16px_4px_rgb(0,0,0,0.25)]'>
                            <div
                                className='rounded-full border-[#5D5A88] border-r-[#E7E6F2] border-[16px] w-fit mx-auto'>
                                <div className='bg-white w-16 h-16 rounded-full place-content-center grid'>
                                    <div className='text-xl font-semibold'>75%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-gray-400 flex pt-4 rounded-xl gap-x-10 px-3 h-fit'>
                        <div className='text-2xl justify-evenly grid h-48'>
                            <div><MdOutlineTimer/></div>
                            <div><TbChecklist/></div>
                            <div><BsJournalCheck/></div>
                            <div><RxDownload/></div>
                        </div>
                        <div className='text-xl justify-evenly grid'>
                            <p>5 Hour</p>
                            <p>2 Exams</p>
                            <p>5 Quizes</p>
                            <p>8/10 Resources</p>
                        </div>
                        <div className='text-xl justify-evenly grid h-[180px]'>
                            <p>Content Watched</p>
                            <div
                                className='my-1 bg-green-500 rounded-full place-content-center grid text-white text-base h-9'>
                                <div className='flex'>Completed
                                    <BsCheck2Circle className='text-xl ml-1.5'/></div>
                            </div>
                            <div
                                className='my-1 bg-green-500 rounded-full place-content-center grid text-white text-base h-9'>
                                <div className='flex'>Completed
                                    <BsCheck2Circle className='text-xl ml-1.5'/></div>
                            </div>
                            <p>Downloaded</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg p-3'>
                        <div className='rounded-lg justify-between px-3 bg-[#5D5A88] py-3 flex text-lg text-white mt-2 gap-3'>
                            <BsCalendar2Check className='text-2xl'/>
                            <p>Assignment Due Date</p>
                            <p>2/11/23</p>
                        </div>
                        <div className='rounded-lg justify-between px-3 bg-[#5D5A88] py-3 flex text-lg text-white mt-2'>
                            <BsCalendar2Check className='text-2xl'/>
                            <p>Exam</p>
                            <p>2/11/23</p>
                        </div>
                        <div className='rounded-lg justify-between px-3 bg-gray-400 py-3 flex text-lg text-white mt-2'>
                            <BsCalendar2Check className='text-2xl'/>
                            <p>Exam</p>
                            <p>Expired</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TraineeLayer>
}