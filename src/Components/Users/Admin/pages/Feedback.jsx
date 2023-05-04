import FeedbackUser from "../Constant/feedbackUser";
import AdminLayer from "../Layer/AdminLayer";
import {MdGroups, MdOutlineLocalPostOffice} from 'react-icons/md';
import {VscFeedback} from 'react-icons/vsc';
import {IoClose} from 'react-icons/io5';
import {useState} from "react";
import {MdOutlineEmojiEmotions} from 'react-icons/md';
import {BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown,BsEmojiDizzy,BsCheck2} from 'react-icons/bs';

export default function Feedback() {

    const [openPopUp,
        setOpenPopUP] = useState(false);

    function FeedbackPopup() {
        setOpenPopUP(!openPopUp);
        console.log('$setOpenPopUP and {openPopUp}');
        console.log(openPopUp);
    }
    return (
        <AdminLayer title='Feedback'>
            <div className="col-span-7 h-full">
                <div className="flex w-[60%] justify-evenly text-2xl mx-auto">
                    <div>
                        <h2 className="px-1.5 ">Soft Skill 100</h2>
                        <div className="bg-[#B468FF] w-full h-1.5"></div>
                    </div>
                    <div>
                        <h2 className="px-1.5 text-[#a69bb1]">Enterpreuner skill 100</h2>
                        <div className="bg-none w-full h-1.5"></div>
                    </div>
                    <div>
                        <h2 className="px-1.5 text-[#a69bb1]">Technical skill</h2>
                        <div className="bg-none w-full h-1.5"></div>
                    </div>
                </div>
                <div className="flex w-full justify-evenly mt-4">
                    <div className="flex bg-[#AB57FF] p-1 rounded-lg text-center w-60">
                        <div className="bg-white w-12 h-12 rounded-lg m-2">
                            <MdGroups className="fill-[#AB57FF] text-4xl mx-auto my-1"/>
                        </div>
                        <div className="py-2 text-2xl text-white">
                            <p className="text-sm">Trainees on this training</p>
                            <p className="font-bold">70</p>
                        </div>
                    </div>
                    <div className="flex bg-[#AB57FF] p-1 rounded-lg text-center w-60">
                        <div className="bg-white w-12 h-12 rounded-lg m-2">
                            <VscFeedback className="fill-[#AB57FF] text-4xl mx-auto my-1"/>
                        </div>
                        <div className="py-2 text-2xl text-white">
                            <p className="text-sm">Total Feedbacks</p>
                            <p className="font-bold">50</p>
                        </div>
                    </div>
                    <div className="flex bg-[#AB57FF] p-1 rounded-lg text-center w-60">
                        <div className="bg-white w-12 h-12 rounded-lg m-2">
                            <MdOutlineLocalPostOffice className="fill-[#AB57FF] text-4xl mx-auto my-1"/>
                        </div>
                        <div className="py-2 text-2xl text-white">
                            <p className="text-sm">Unread Feedbacks</p>
                            <p className="font-bold">2</p>
                        </div>
                    </div>
                </div>
                <div
                    className="flex text-lg bg-gray-200 w-fit rounded-md text-purple-400 mt-3 ml-3 mb-2">
                    <div className="bg-white rounded-lg shadow-lg">
                        <h2 className="px-3 pt-1 ">All</h2>
                    </div>
                    <div className="bg-none rounded-lg ">
                        <h2 className="px-3 pt-1 ">Read</h2>
                    </div>
                    <div className="bg-none rounded-lg ">
                        <h2 className="px-3 pt-1 ">Unread</h2>
                    </div>
                </div>

                <div className="w-[95%] mx-auto h-[calc(100%-190px)] overflow-y-hidden">
                    <div className="grid grid-cols-4 shadow justify-between px-10 py-3">
                        <p>Trainnes</p>
                        <p>Email Adress</p>
                        <p>Status</p>
                        <p>Assesment</p>
                    </div>
                    <div className="h-full overflow-y-scroll ignoredSB pt-2 pb-20">
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup}/>
                        <FeedbackUser detail={FeedbackPopup} />
                    </div>
                </div>

            </div>
            <div
                className={openPopUp
                ? "w-[calc((100%*(7/8))-30px)] h-full bg-black opacity-50 absolute top-0 block"
                : "w-[calc((100%*(7/8))-30px)] h-full bg-black opacity-50 absolute top-0 hidden"}></div>
            <div
                className={openPopUp
                ? "w-[calc((100%*(7/8))-30px)] h-full absolute top-0"
                : "w-full h-full absolute top-0 hidden"}
                onClick={FeedbackPopup}>
                <div className="w-[85%] h-[80%] mx-auto mt-[5%] flex flex-col">
                    <div className="w-full flex justify-end pr-10">
                        <div className="bg-white shadow-2xl shadow-black rounded-full"><IoClose className="fill-black text-3xl"/></div>
                    </div>
                    <div
                        className="bg-white w-[95%] h-full mt-3"
                        onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="flex justify-between p-3 text-lg font-bold h-[8%]">
                            <div className="flex">
                                <p className="mr-3">Name</p>
                                <p>John Doe</p>
                            </div>
                            <div className="flex">
                                <p className="mr-3">Submission Date</p>
                                <p>15/03/2023</p>
                            </div>
                        </div>
                        <div className="h-[92%] w-full px-10">
                            <div className="bg-slate-400 w-full px-5 py-3 rounded-md h-[30%]">{/* first card */}
                                <div className="bg-white rounded-lg my-3 text-center text-lg font-semibold text-gray-500">
                                    <p>Satisfaction Level</p>
                                </div>
                                <div className="flex justify-evenly">
                                    <div className="pt-3 bg-white rounded-full aspect-square w-24 text-center">
                                    <MdOutlineEmojiEmotions className="text-5xl mx-auto fill-green-800"/>
                                        <div>Excellent</div>
                                    </div>
                                    <div className="pt-3 bg-white rounded-full aspect-square w-24 text-center">
                                    <BsEmojiSmile className="text-5xl mx-auto fill-green-400"/>
                                        <div>Good</div>
                                    </div>
                                    <div className="pt-3 bg-white rounded-full aspect-square w-24 text-center">
                                    <BsEmojiNeutral className="text-5xl mx-auto fill-orange-400"/>
                                        <div>Medium</div>
                                    </div>
                                    <div className="pt-3 bg-white rounded-full aspect-square w-24 text-center">
                                    <BsEmojiFrown className="text-5xl mx-auto fill-red-400"/>
                                        <div>Poor</div>
                                    </div>
                                    <div className="pt-3 bg-white rounded-full aspect-square w-24 text-center">
                                    <BsEmojiDizzy className="text-5xl mx-auto fill-red-800"/>
                                        <div>Very Bad</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-400 w-full px-5 py-3 rounded-xl mt-3 h-[65%] ignoredSB overflow-y-scroll">
                                <div className="mt-2">
                                    <p className="text-white text-xl font-bold font-sans">Feelings regarding the Training</p>
                                    <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Interest of the Training</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Quality of content (course objective achieved)</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                </div>

                                <div className="pt-3">
                                    <p className="text-white text-xl font-bold font-sans">Facilitator Evaluation</p>
                                    <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Knowledge</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Skill & Learning Style</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Facilitator encourages participation</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Interaction</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Best practice sharing with a wide variety of activity types</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                </div>

                                <div className="pt-3">
                                    <p className="text-white text-xl font-bold font-sans">The environment</p>
                                    <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Welcoming Environment</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Venue & Access Map</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                </div>

                                <div className="pt-3">
                                    <p className="text-white text-xl font-bold font-sans">Refreshment Service</p>
                                    <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Quality</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Cafteria Neatness</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                <div className="bg-white rounded-lg my-3 text-lg  text-gray-500 flex justify-between px-[10%] py-1.5">
                                    <p>Convenience</p>
                                    <MdOutlineEmojiEmotions className="text-3xl fill-green-800"/>
                                </div>
                                </div>

                                <div className="pt-5">
                                    <p className="text-white text-xl font-bold font-sans">Mention at least two key learning outcomes of this training.</p>
                                    <div className="bg-slate-300 rounded-lg my-3 text-lg  text-gray-600 px-[5%] text-justify py-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum 
                                    lacus tellus in mi orc, 
                                    netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus 
                                    tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc 
                                    placerat mi quis vitae cursus ornare.</p>
                                </div>
                                </div>

                                <div className="pt-3">
                                    <p className="text-white text-xl font-bold font-sans">The most memorable experience.</p>
                                    <div className="bg-slate-300 rounded-lg my-3 text-lg  text-gray-600 px-[5%] text-justify py-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum 
                                    lacus tellus in mi orc, 
                                    netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus 
                                    tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc 
                                    placerat mi quis vitae cursus ornare.</p>
                                </div>
                                </div>

                                <div className="pt-3">
                                    <p className="text-white text-xl font-bold font-sans">Other comments or remarks on the program.</p>
                                    <div className="bg-slate-300 rounded-lg my-3 text-lg  text-gray-600 px-[5%] text-justify py-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum 
                                    lacus tellus in mi orc, 
                                    netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus 
                                    tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc 
                                    placerat mi quis vitae cursus ornare.</p>
                                </div>
                                </div>

                                <div className="pt-3">
                                    <p className="text-white text-xl font-bold font-sans">Would you recommend this training to others.</p>
                                    <div className="flex justify-center text-lg py-3 gap-x-8">
                                    <div className="flex gap-2 text-white text-xl">
                                        <div className="border-white border-2 w-fit h-fit">
                                            <BsCheck2 className="fill-white"/>
                                        </div>
                                        <p>Yes</p>
                                    </div>
                                    <div className="flex gap-2 text-white text-xl">
                                        <div className="border-white border-2 w-fit h-fit">
                                            <BsCheck2 className="fill-transparent"/>
                                        </div>
                                        <p>No</p>
                                    </div>
                                </div>
                                </div>

                                <div className="pt-3">
                                    <p className="text-white text-xl font-bold font-sans">Rating</p>
                                    <div className="flex justify-center text-lg py-3 gap-x-8">
                                    <div className="flex gap-2 text-white text-xl">
                                        <div className="border-white border-2 w-fit h-fit">
                                            <BsCheck2 className="fill-white"/>
                                        </div>
                                        <p>Yes</p>
                                    </div>
                                    <div className="flex gap-2 text-white text-xl">
                                        <div className="border-white border-2 w-fit h-fit">
                                            <BsCheck2 className="fill-transparent"/>
                                        </div>
                                        <p>No</p>
                                    </div>
                                </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </AdminLayer>
    );
}
