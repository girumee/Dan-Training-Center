import {IoAddCircleOutline} from "react-icons/io5";
import {CiSearch} from "react-icons/ci";
import {BiFilter} from "react-icons/bi";

import User from "../Constant/user";
import AdminLayer from "../Layer/AdminLayer";
import {useState} from "react";

export default function Members() {

    const [invite,
        setInvite] = useState(<button className="bg-[#B468FF] px-3 text-white py-1 rounded inline-block float-right" onClick={inviteClick}>
        <IoAddCircleOutline className="inline w-6 h-6"/>
        Invite Users
    </button>);

          function inviteClick(){
            setInvite(<div className="inline-block float-right  border-2 rounded-md border-[#B468FF] py-0.5 pr-0.5">
            <input type='search' className='w- text-center' placeholder="example@gmail.com"/>
            <button className="bg-[#B468FF] px-3 text-white py-1 rounded float-right" onClick={send}>
            Send
        </button></div>);
          }

          function send(){
            setInvite(<button className="bg-[#B468FF] px-3 text-white py-1 rounded inline-block float-right" onClick={inviteClick}>
            <IoAddCircleOutline className="inline w-6 h-6"/>
            Invite Users
        </button>);
          }
    
    return (
        <AdminLayer >
            <div className="col-span-7 h-full">
                {/* invite button */}
                <div className="px-10 py-0 h-[2%]">
                    <h1 className="inline text-xl font-semibold">100 Users in total</h1>
                    {invite}
                    
                </div>
                {/* search bar */}
                <div className="flex gap-10 h-[8%]">
                    <div
                        className="w-3/4 h-9 bg-white rounded-lg mt-5 ml-5 flex border-[#B468FF] border">
                        <input
                            type="search"
                            className="text-center h-full w-full rounded-lg  bg-white placeholder:text-lg placeholder:text-left placeholder:pl-4"
                            placeholder="search for user, email address..."></input>
                        <CiSearch className="h-6 w-6 text-[#962DFF] mt-1.5 mr-2"/>
                        <div className="border h-3/4 border-r-[#962DFF] mt-1"></div>
                        <BiFilter className="h-6 w-6 text-[#962DFF] mt-1.5 mx-2"/>
                    </div>
                    <div className="flex mt-5">
                        <div>
                            <h2 className="px-1.5 text-lg">Trainer 5</h2>
                            <div className="bg-[#B468FF] w-full h-1.5"></div>
                        </div>
                        <div>
                            <h2 className="px-1.5 text-lg text-[#a69bb1]">Trainee 100</h2>
                            <div className="bg-[#a69bb1] w-full h-1.5"></div>
                        </div>
                    </div>
                </div>
                {/* member list */}
                <div
                    className="w-auto mr-3 mt-10 overflow-scroll overflow-x-hidden h-[calc(90%-40px)] ignoreScrollbar">
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                </div>
            </div>
        </AdminLayer>
    );
}
