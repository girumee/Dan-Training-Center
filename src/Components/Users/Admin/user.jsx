import {RxDotFilled} from 'react-icons/rx';
import {FaEdit} from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';

export default function User(){
    return <div>
    <div className="flex gap-2 px-5 mt-4">
        <input type='checkbox'/>
        <img src="/assets/Admin/member.png" alt='' className="rounded-2x w-10"/>
        <h2 className="font-bold text-lg w-[20%] ml-5">John Doe</h2>
        <h2 className="font-semibold text-lg w-[25%]">johndoe@gmail.com</h2>
        <h2 className="font-semibold w-[10%] ">Masters</h2>
        <h2 className="font-semibold w-[10%] ">Soft Skill</h2>
        <div className="w-[15%]">
         <div className="flex w-fit border-gray-500 border justify-center px-3 rounded-lg">
            <RxDotFilled className="text-green-500 w-5 h-5"/>
            <h2>Active</h2>
         </div>
        </div>
        <div className="flex w-[10%] justify-end gap-2">
            <FaEdit className="w-5 h-5"/>
            <MdDeleteForever className="text-red-500 w-6 h-6"/>
        </div>
    </div>
    <div className="mx-auto w-[90%] border-t border-gray-200 mt-1"></div>
    </div>
}