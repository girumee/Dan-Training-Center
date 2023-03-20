import {IoMdTime} from 'react-icons/io';

export default function AdminTrainingCard(){
       return <div>
                 <div className="shadow-2xl w-80 ml-7 mt-4 pt-4">
                    <div className='flex -space-x-24 w-full h-1/2'>
                        <div className='flex w-full h-full'>
                            <div className="px-3 w-full mt-3">
                                <img src="/assets/Admin/th.png" alt="thmbnail not found"></img>
                            </div>
                        </div>
                        <div className="w-[70px] h-8 bg-[#73ED5F] pt-1 text-center ml-60 rounded-md">
                            <p>Active</p>
                        </div>
                    </div>
                    
                <div className="flex flex-row w-full justify-between">

                <div className="flex flex-row">
                <div className="pl-3 pr-2"><img src="/assets/Admin/author.png" alt=''></img></div>
                <div className="flex flex-col ml-2">
                <p>John Doe</p>
                <p className="text-[#2D4849]">Trainer</p>
                </div>
                </div>

            
                <div className="pr-5 ">
                <p className="text-lg text-[#858585]">Soft Skill</p>
                </div>
                </div>
               
                <div className="w-full mt-4 ml-2 ">
                <p>Soft Skill lorem ispum lorem ipsum<br/> lorem 
                ispum lorem ipsumlorem ispum <br/>lorem ipsum.</p>
                </div>

                <div className="flex flex-row ml-2 pt-4 text-[#]">
                <IoMdTime className="w-6 h-6"/>
                <p className="pl-2">08 hr 15 mins</p>
                </div>

                <div className="w-full bg-[#E6F0F0] text-center  mt-2 p-4">
                <button className="bold font-bold ">View Detail</button>
                </div>
                </div>
            </div>
}