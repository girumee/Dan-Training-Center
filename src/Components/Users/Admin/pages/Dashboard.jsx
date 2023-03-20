import AdminNavBar from "../AdminNavBar";
import {BsArrow90DegDown} from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';


export default function Dashboard()
{
    return <div className="col-span-7 h-screen">
            <AdminNavBar name='Dashboard'/>
            <div className="w-full h-[55%] grid grid-cols-2">
                <div className="w-auto h-auto bg-white m-7 shadow-xl rounded-md p-4">
                    <h2 className="text-[#8000FF] font-semibold text-lg">Total Members</h2>
                    <div className="grid grid-cols-2">
                        <div>
                            <p>Trainer</p>
                            <img alt="" src="/assets/Admin/trainerWithboard.png" className="inline" />
                            <p className="inline-block font-bold text-5xl text-[#8000FF] mt-4">5</p>
                        </div>
                        <div className="">
                            <p>Trainee</p>
                            <img alt="" src="/assets/Admin/studentwithbag.png" className="inline" />
                            <p className="inline-block font-bold text-5xl text-[#8000FF] mt-4">100</p>
                        </div>
                    </div>
                    <div>
                        <p>Trainings</p>
                        <div className="flex text-center justify-evenly">
                            <div>
                                <img alt="" src="/assets/Admin/enterpreneurskill.png"></img>
                                <p>Enterpreneur Skill</p>
                            </div>
                            <div>
                                <img alt="" src="/assets/Admin/softskill.png"></img>
                                <p>Soft Skill</p>
                            </div>
                            <div>
                                <img alt="" src="/assets/Admin/technicalskill.png"></img>
                                <p>Technical Skill</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-auto h-auto bg-white m-7 shadow-xl rounded-md p-4">
                    <h2 className="text-[#8000FF] font-semibold text-lg">Events & Announcements</h2>
                    <p className="inline font-semibold text-lg">Admin</p><BsArrow90DegDown className="inline -rotate-90"/> <p className="inline float-right mr-6">9:30</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <hr className="my-2 w-5/6 mx-auto"/>
                    <p className="inline font-semibold text-lg">Trainer</p><BsArrow90DegDown className="inline -rotate-90"/> <p className="inline float-right mr-6">Yesterday</p>
                    <p>Exam on Tuesday @ 3AM. GET READY!</p>
                    <hr className="my-2 w-5/6 mx-auto"/>
                    <p className="inline font-semibold text-lg">Trainer</p><BsArrow90DegDown className="inline -rotate-90"/> <p className="inline float-right mr-6">Yesterday</p>
                    <p>Exam on Tuesday @ 3AM. GET READY!</p>
                    <hr className="my-2 w-5/6 mx-auto"/>
                </div>
            </div>
            <div className="w-full h-[36%] pt-8 px-8">
                 <div className="w-full h-[90%] bg-white mx-auto shadow-xl rounded-md p-4">
                    <h2 className="font-semibold inline">Recent activity</h2>
                   <span className="float-right"><h2 className="font-semibold inline">view all</h2>
                    <IoIosArrowForward className="inline-block"/></span> 
                    <span className="block px-4 pt-4"><p className="inline text-lg text-gray-600">User123 changed their name to John Doe.</p>
                    <p className="inline float-right mr-6">9:30</p></span>
                    <hr className="my-2 w-5/6 mx-auto"/>
                    <span className="block px-4 pt-2"><p className="inline text-lg text-gray-600">Trainer Jack Doe submitted a grade report for Soft Skill training.</p>
                    <p className="inline float-right mr-6">9:30</p></span>
                    <hr className="my-2 w-5/6 mx-auto"/>
                    <span className="block px-4 pt-2"><p className="inline text-lg text-gray-600">New User Alert! User456 joined.</p>
                    <p className="inline float-right mr-6">Yesterday</p></span>
                    <hr className="my-2 w-5/6 mx-auto"/>
                </div>
            </div>

        </div>
    
}