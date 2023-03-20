import {IoMdNotifications} from 'react-icons/io';
import {RxDotsHorizontal} from 'react-icons/rx';
import {CiSearch} from 'react-icons/ci';

  export default function AdminNavBar(props){
    return <div className="shadow-lg h-16 shadow-slate-300 w-full grid grid-cols-3">
    <div className="text-center justify-center"><h1 className="my-5 font-bold text-lg ml-6 text-start">{props.name}</h1></div>
    <div className="flex">
        <div className="w-3/4 h-1/2 bg-slate-200 rounded-2xl mt-5 ml-5 flex">
            <input type='search'  className="text-center h-full w-full rounded-2xl  bg-slate-200"></input>
             <CiSearch className="h-6 w-6 text-[#962DFF] mt-1.5 mr-4"/>
        </div>
        <IoMdNotifications className="w-8 h-8 text-[#962DFF] mt-5 ml-3"/>    
    </div>
    <div className="flex gap-3 justify-end mr-5">
        <div className="text-center">
            <h1 className="text-lg font-semibold">Admin</h1>
            <h3>admin@gmail.com</h3>
        </div>
        <div>
            <div className="rounded-full p-0.5 border-2 border-[#962DFF] my-2">
                <img src="/assets/Admin/member.png" alt='' className="rounded-full border-black border"></img>
            </div>
        </div>
        <RxDotsHorizontal className="w-7 h-7 mt-5"/>
    </div>

</div>
  }