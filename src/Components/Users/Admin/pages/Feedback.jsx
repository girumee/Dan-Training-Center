import FeedbackUser from "../Constant/feedbackUser";
import AdminLayer from "../Layer/AdminLayer";
import {MdGroups,MdOutlineLocalPostOffice} from 'react-icons/md';
import {VscFeedback} from 'react-icons/vsc';

export default function Feedback() {
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
                        <p>Assigment</p>
                    </div>
                    <div className="h-full overflow-y-scroll ignoredSB pt-2">
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <FeedbackUser />
                    <div className="mx-auto w-[90%] border-t border-gray-300 "></div>
                    </div>
                </div>
            </div>
        </AdminLayer>
    );
}
