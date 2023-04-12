import React, {useState} from "react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {IoMdAttach} from "react-icons/io";
import {BsFillEmojiSmileFill} from "react-icons/bs";
import AdminLayout from "../Layer/AdminLayer";
function MessageChat() {
    const [isOpen,
        setIsOpen] = useState(true);
    return <AdminLayout title='Chat'>
    <div className="grid grid-cols-9 h-full">
        {/* The first part of the component */}
        <div className="col-span-8 h-full ">
            <div className="flex flex-cols h-full">
                <>
                    {!isOpen ? (<div className="shadow px-2 py-4">  
                    <AiOutlineRight className="bg-white h-5 w-5 my-4 mx-auto " onClick={()=> setIsOpen(!isOpen)} />
                    <img className="rounded-full my-2 w-20" src="/assets/Admin/member.png" alt="something" /> 
                    <img className="rounded-full my-2 w-20" src="/assets/Admin/member.png" alt="something" /> 
                    <img className="rounded-full my-2 w-20" src="/assets/Admin/member.png" alt="something" /> </div> ) : 
                    ( <div className="shadow px-2 py-4">  
                    <AiOutlineLeft className="bg-white h-5 w-5 my-4 mx-auto " onClick={()=> setIsOpen(!isOpen)} />
                    <div className="flex">
                        <img className="rounded-full my-2 w-20" src="/assets/Admin/member.png" alt="something" />
                        <p className="text-lg font-semibold ml-3">John Doe</p>
                     </div>
                     <div className="flex">
                        <img className="rounded-full my-2 w-20" src="/assets/Admin/member.png" alt="something" />
                        <p className="text-lg font-semibold ml-3">John Doe</p>
                     </div>
                     <div className="flex">
                        <img className="rounded-full my-2 w-20" src="/assets/Admin/member.png" alt="something" />
                        <p className="text-lg font-semibold ml-3">John Doe</p>
                     </div>
                      </div> ) }
                    </> {/* the middle of the component */}
                <div className=" text-left w-screen h-full">

                    <div class="h-[88%] ">
                        <div className="bg-[#E4C9FF] rounded-lg mx-6 my-4 px-6 py-10">
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                <br/>
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>

                        </div>

                        <div className="bg-[#D2D2D2] rounded-lg mx-6 my-4 px-6 py-10">
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                <br/>
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>

                        </div>
                    </div>

                    <div className="border rounded-lg flex  w-full h-[6%]">
                        <BsFillEmojiSmileFill className="w-7 h-7 mt-2 ml-4"/>
                        <form action="" className="w-full h-fit">
                            <input
                                type="text"
                                name="search"
                                placeholder="type something"
                                autocomplete="off"
                                aria-label="search talk"
                                className=" w-full px-7 py-2 focus:outline-none"/>

                        </form>
                        <IoMdAttach className="w-7 h-7 mt-2"/>
                        <button className="bg-[#8000FF] px-7 py-1 mr-2 my-2 rounded-lg">
                            <p className="">Send</p>
                        </button>
                    </div>
                </div>

            </div>

        </div>
        {/* The end of the component */}
        <div className="col-span-1 h-full shadow">
            <div className="text-center mt-7 ml-3">
                <div className='p-1.5 border-4 rounded-full border-purple-700 aspect-square'><img className="mx-auto rounded-full object-fill h-[100%] w-[100%] " src="/assets/Admin/member.png" alt="something"/></div>
                <p className="text-gray text-lg">Active Now</p>
            </div>
            <div className="text-center mt-7">
                <h1>Trainer123</h1>
                <p className="text-gray">Soft Skill</p>
            </div>
        </div>

    </div>
    </AdminLayout>
}

export default MessageChat;