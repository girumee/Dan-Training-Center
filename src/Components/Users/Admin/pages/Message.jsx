import AdminNavBar from "../AdminNavBar";
import AdminSideNav from "../AdminSideNav";

export default function Message()
{
    return <div className="col-span-7 h-screen">
            <AdminNavBar name='Message'/>
            <div className="w-full h-auto">
                <div className="flex m-5">
                    <div>
                        <h2 className="px-1.5 text-2xl">Trainer</h2>
                        <div className="bg-[#B468FF] w-full h-1.5"></div>
                    </div>
                    <div>
                        <h2 className="px-1.5 text-2xl text-[#a69bb1]">Trainee</h2>
                        <div className="bg-[#a69bb1] w-full h-1.5"></div>
                    </div>
                    <div>
                        <h2 className="px-1.5 text-2xl text-[#a69bb1]">Contact Us</h2>
                        <div className="bg-[#a69bb1] w-full h-1.5"></div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row mx-12">
                        <div>
                            <div className="rounded-full p-0.5 border-2 border-[#962DFF] my-2">
                                <img src="/assets/Admin/member.png" alt="" className="rounded-full border-black border"></img>
                            </div>
                        </div>
                        <div className="w-full pt-3 pl-3">
                            <p className="font-bold inline">Trainer123</p>
                            <p className="inline-block float-right mr-10">9:30</p>
                            <p className="text-gray-400 text-sm">Soft Skill</p>
                            <p className="mx-4 text-justify mr-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                                anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="flex flex-row mx-12">
                        <div>
                            <div className="rounded-full p-0.5 border-2 border-gray-400 my-2">
                                <img src="/assets/Admin/member.png" alt="" className="rounded-full border-black border"></img>
                            </div>
                        </div>
                        <div className="w-full pt-3 pl-3">
                            <p className="font-bold inline">John Doe</p>
                            <p className="inline-block float-right mr-10">9:30</p>
                            <p className="text-gray-400 text-sm">Enterpreneur Skill</p>
                            <p className="mx-4 text-justify mr-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                                anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}