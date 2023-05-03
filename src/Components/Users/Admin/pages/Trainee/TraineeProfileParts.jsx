import {MdAddCircleOutline, MdCloudUpload} from 'react-icons/md';
import React, {useState} from "react";
import Finish from '../../../../../TraineeProfileFinishedLottie.json';
import Lottie from 'lottie-react';
import { AiFillCaretRight,AiFillCaretDown } from "react-icons/ai";

export function TraineeProfilePart0(props) {
    const [isListVisible, setIsListVisible] = useState(false);
   const [isAdressVisible, setIsAdressVisible] = useState(false);
   const [isElevelVisible, setIsELevelVisible] = useState(false);
      
        function toggleList() {
          setIsListVisible(!isListVisible);
        }

        function toggleAddress(){
            setIsAdressVisible(!isAdressVisible);
        }

        function toggleELevel(){
            setIsELevelVisible(!isElevelVisible);
        }
    return <div
        className='w-[70%] max-h-[50%] bg-gradient-to-br from-[#9EAAEB] to-[#5c3199] p-4 rounded-3xl'>
        <p className='font-bold text-white text-lg pl-20'>My Profile</p>
        <div className='pl-16'>
        <div className="pt-2" onClick={toggleList} >
      <h1 className="p-1 cursor-pointer flex items-center rounded-lg bg-[#cecbcb] mr-4 pl-4"><div className="flex-1 text-white pl-3 font-bold text-lg">Basic Info</div>  {isListVisible ? <AiFillCaretRight/> : <AiFillCaretDown/>}</h1>
      <ul className={`mt-2 ${isListVisible ? '' : 'hidden'} pt-3 text-white`}>
      <li className="mb-2 cursor-pointer flex ml-5">
       <p className="w-48">First Name</p>
        <p>Jone Doe</p>
        </li>
        <li className="mb-2 cursor-pointer flex ml-5">
       <p className="w-48">Last Name</p>
        <p>Kebede</p>
        </li>
        <li className="mb-2 cursor-pointer flex ml-5"><p className="w-48" >Date of Birth</p><p>01/02/1999</p></li>
        <li className="mb-2 cursor-pointer flex ml-5"><p className="w-48">Educationa Level</p><p>bachelors</p></li>
        <li className="mb-2 cursor-pointer flex ml-5"><p className="w-48">Sex</p><p>Male</p></li>
      </ul>
    </div>

    <div className="mt-3" onClick={toggleAddress} >
      <h1 className="p-1 cursor-pointer flex items-center rounded-lg bg-[#cecbcb] mr-4 pl-4"><div className="flex-1 text-white pl-3 font-bold text-lg">Address </div>  {isAdressVisible ? <AiFillCaretRight/> : <AiFillCaretDown/>}</h1>
      <ul className={`mt-2 ${isAdressVisible ? '' : 'hidden'} text-white`} onClick={()=>{}}>
      <li className="mb-2 cursor-pointer flex ml-5">
       <p className="w-48">First Name</p>
        <p>Jone Doe</p>
        </li>
        <li className="mb-2 cursor-pointer flex ml-5">
       <p className="w-48">Last Name</p>
        <p>Kebede</p>
        </li>
        <li className="mb-2 cursor-pointer flex ml-5"><p className="w-48" >Date of Birth</p><p>01/02/1999</p></li>

      </ul>
    </div>

    <div onClick={toggleELevel}>
  <div className="mt-3">
    <h1 className="p-1 cursor-pointer flex items-center rounded-lg bg-[#cecbcb] mr-4 pl-4"><div className="flex-1 text-white pl-3 font-bold text-lg">Educational Level </div>  {isElevelVisible ? <AiFillCaretRight/> : <AiFillCaretDown/>}</h1>
    <ul className={`mt-2 ${isElevelVisible ? '' : 'hidden'} text-white`}>
    <li className="mb-2 cursor-pointer flex ml-5">
       <p className="w-48">First Name</p>
        <p>Jone Doe</p>
        </li>
        <li className="mb-2 cursor-pointer flex ml-5">
       <p className="w-48">Last Name</p>
        <p>Kebede</p>
        </li>
        <li className="mb-2 cursor-pointer flex ml-5"><p className="w-48" >Date of Birth</p><p>01/02/1999</p></li>
  
    </ul>
  </div>
</div>
        </div>
    </div>
}

export default function TraineeProfilePart1(props) {

    return <div
        className='w-full bg-gradient-to-br from-[#9EAAEB] to-[#5c3199] p-4 rounded-3xl'>
        <p className='font-bold text-white text-lg pl-20'>Basic Info</p>
        <div className='flex'>
            <div className=''>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>1</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>2</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>3</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>4</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>5</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white font-bold'>🗸</p>
                </div>
            </div>
            <div className='w-full p-10 pl-24'>
                <p className='text-white font-semibold'>First Name</p>
                <input
                    type='text'
                    placeholder='First Name'
                    className='rounded-md w-3/4 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                <p className='text-white font-semibold'>Last Name</p>
                <input
                    type='text'
                    placeholder='Last Name'
                    className='rounded-md w-3/4 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                <div className='flex'>
                    <div className='w-1/2'>
                        <p className='text-white font-semibold'>Date of Birth</p>
                        <input
                            type='text'
                            placeholder='DD/MM/YYYY'
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                    </div>
                    <div className='pt-1'>
                        <p className='text-white font-semibold'>Sex</p>
                        <div className='flex pt-2 gap-x-10'>
                            <div className=''>
                                <input type='radio' name='traineeSex'/>
                                <label className='text-white font-bold px-2'>Male</label>
                            </div>
                            <div className=''>
                                <input type='radio' name='traineeSex'/>
                                <label className='text-white font-bold px-2'>Female</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    </div>
}

export function TraineeProfilePart2(props) {
    console.log(props.children);

    return <div
        className='w-full bg-gradient-to-br from-[#9EAAEB] to-[#5c3199] p-4 rounded-3xl'>
        <p className='font-bold text-white text-lg pl-20'>Address</p>
        <div className='flex'>
            <div className=''>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>1</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>2</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>3</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>4</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>5</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white font-bold'>🗸</p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex'>
                    <div className='w-full p-10 pl-24'>
                        <p className='text-white font-semibold'>City</p>
                        <select
                            name="pets"
                            id="pet-select"
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'>
                            <option value="Addis Ababa">Addis Ababa</option>
                            <option value="Dire Dawa">Dire Dawa</option>
                            <option value="Afar">Afar</option>
                            <option value="Amhara">Amhara</option>
                            <option value="Oromiya">Oromiya</option>
                            <option value="Tigray">Tigray</option>
                        </select>

                        <p className='text-white font-semibold'>Woreda</p>
                        <input type='number' min={1} max={20} placeholder='01' className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>

                        <p className='text-white font-semibold'>House Number</p>
                        <input type='text' inputMode='number' placeholder='1234' className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                    </div>
                    
                    {/* gap */}
                    <div className='bg-white w-0.5 my-5 '></div>

                    <div className='w-full p-5 pl-24'>
                        <p className='text-white font-semibold'>Sub City</p>
                        <select
                            name="pets"
                            id="pet-select"
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'>
                            <option value="Arada">Arada</option>
                            <option value="Akaki">Akaki</option>
                            <option value="Bole">Bole</option>
                            <option value="Lemi Kura">Lemi Kura</option>
                            <option value="Kirkos">Kirkos</option>
                            <option value="Nefas Silk">Nefas Silk</option>
                        </select>

                        <p className='text-white font-semibold'>Kebele</p>
                        <input type='number' min={1} max={20} placeholder='01' className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                        
                        <p className='text-white font-semibold'>Phone Number</p>
                        <div className='flex'>
                        <div className='flex w-5/6'>
                            <select
                            name="pets"
                            id="pet-select"
                            className='rounded-tl-md rounded-bl-md w-1/3 py-1.5 px-1.5 placeholder:pl-8 mb-6'>
                            <option value="Eth">+251</option>
                            <option value="USA">+1</option>
                            <option value="UAE">+699</option>
                            </select>
                            <input type='phone' placeholder='123456789' className='rounded-tr-md rounded-br-md w-full py-1.5 px-1.5 mb-6'/>
                        </div>
                        <MdAddCircleOutline className='text-3xl text-white ml-2'/>
                        </div>
                    </div>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    </div>
}

export function TraineeProfilePart3(props) {
    console.log(props.children);

    return <div
        className='w-full bg-gradient-to-br from-[#9EAAEB] to-[#5c3199] p-4 rounded-3xl'>
        <p className='font-bold text-white text-lg pl-20'>Education</p>
        <div className='flex'>
            <div className=''>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>1</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>2</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>3</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>4</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>5</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white font-bold'>🗸</p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex'>
                    <div className='w-full p-10 pl-24'>
                        <p className='text-white font-semibold'>Education Level</p>
                        <select
                            name="pets"
                            id="pet-select"
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'>
                            <option value="Bachlors">Bachelors</option>
                            <option value="Masters">Masters</option>
                            <option value="PHD">PHD</option>
                        </select>

                        <p className='text-white font-semibold'>Name of Institution</p>
                        <select
                            name="pets"
                            id="pet-select"
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'>
                            <option value="Addis Ababa Univesity">Addis Ababa University</option>
                            <option value="Masters">Adama Science and Technology University</option>
                            <option value="PHD">PHD</option>
                        </select>

                        <p className='text-white font-semibold'>Certificate Awarded Year</p>
                        <input
                            type='text'
                            placeholder='DD/MM/YYYY'
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                        
                        <div className='rounded-md w-5/6 py-1.5 px-2 placeholder:pl-8 mb-6 bg-slate-500 opacity-60  text-white flex justify-between'>
                            <p>Please Upload <br/> Certificate / Degree</p>
                            <div className='border border-slate-300 grid place-content-center rounded-lg px-1.5'><MdCloudUpload className='text-3xl'/></div>
                        </div>
                    </div>
                    
                    {/* gap */}
                    <div className='bg-white w-0.5 my-5 '></div>

                    <div className='w-full p-5 pt-2 pl-24'>
                    <p className='font-semibold place-content-center grid text-white text-lg '>Other Certificates</p>
                        <p className='text-white font-semibold'>Acheivement</p>
                        <input type='text' placeholder='Full Stack Web Dev |' className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>

                        <p className='text-white font-semibold'>From</p>
                        <select
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'>
                            <option value="Udemy">Udemy</option>
                            <option value="Coursera">Coursera</option>
                            <option value="Alx">Alx</option>
                            </select>

                        <p className='text-white font-semibold'>Certificate Url or Id</p>
                        <input type='text' placeholder='https://ude.me/00000' className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>

                        <p className='text-white font-semibold'>Other</p>
                        <input type='text' placeholder='' className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>

                    </div>
                </div>
                <div className='flex border-2 border-white w-[40%] mx-auto justify-center rounded-md py-1'>
                    <MdAddCircleOutline className='text-3xl text-white ml-2'/>
                    <p className='text-xl text-white ml-2'>Add More</p>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    </div>
}

export function TraineeProfilePart4(props) {
    console.log(props.children);

    return <div
        className='w-full bg-gradient-to-br from-[#9EAAEB] to-[#5c3199] p-4 rounded-3xl'>
        <p className='font-bold text-white text-lg pl-20'>page4</p>
        <div className='flex'>
            <div className=''>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>1</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>2</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>3</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>4</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white'>5</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white font-bold'>🗸</p>
                </div>
            </div>
            <div className='w-full p-10 pl-24'>
                <p className='text-white font-semibold'>First Name</p>
                <input
                    type='text'
                    placeholder='First Name'
                    className='rounded-md w-3/4 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                <p className='text-white font-semibold'>Last Name</p>
                <input
                    type='text'
                    placeholder='Last Name'
                    className='rounded-md w-3/4 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                <div className='flex'>
                    <div className='w-1/2'>
                        <p className='text-white font-semibold'>Date of Birth</p>
                        <input
                            type='text'
                            placeholder='DD/MM/YYYY'
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                    </div>
                    <div className='pt-1'>
                        <p className='text-white font-semibold'>Sex</p>
                        <div className='flex pt-2 gap-x-10'>
                            <div className=''>
                                <input type='radio' name='traineeSex'/>
                                <label className='text-white font-bold px-2'>Male</label>
                            </div>
                            <div className=''>
                                <input type='radio' name='traineeSex'/>
                                <label className='text-white font-bold px-2'>Female</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    </div>
}

export function TraineeProfilePart5(props) {
    console.log(props.children);

    return <div
        className='w-full bg-gradient-to-br from-[#9EAAEB] to-[#5c3199] p-4 rounded-3xl'>
        <p className='font-bold text-white text-lg pl-20'>page 5</p>
        <div className='flex'>
            <div className=''>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>1</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>2</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>3</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>4</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>5</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div className='w-8 h-8 place-content-center grid rounded-full border-4'>
                    <p className='text-white font-bold'>🗸</p>
                </div>
            </div>
            <div className='w-full p-10 pl-24'>
                <p className='text-white font-semibold'>First Name</p>
                <input
                    type='text'
                    placeholder='First Name'
                    className='rounded-md w-3/4 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                <p className='text-white font-semibold'>Last Name</p>
                <input
                    type='text'
                    placeholder='Last Name'
                    className='rounded-md w-3/4 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                <div className='flex'>
                    <div className='w-1/2'>
                        <p className='text-white font-semibold'>Date of Birth</p>
                        <input
                            type='text'
                            placeholder='DD/MM/YYYY'
                            className='rounded-md w-5/6 py-1.5 px-1.5 placeholder:pl-8 mb-6'/>
                    </div>
                    <div className='pt-1'>
                        <p className='text-white font-semibold'>Sex</p>
                        <div className='flex pt-2 gap-x-10'>
                            <div className=''>
                                <input type='radio' name='traineeSex'/>
                                <label className='text-white font-bold px-2'>Male</label>
                            </div>
                            <div className=''>
                                <input type='radio' name='traineeSex'/>
                                <label className='text-white font-bold px-2'>Female</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    </div>
}

export function TraineeProfilePart6(props) {
    console.log(props.children);

    return <div
        className='w-full bg-gradient-to-br from-[#9EAAEB] to-[#5c3199] p-4 rounded-3xl'>
        <p className='font-bold text-white text-lg pl-20'>Finish</p>
        <div className='flex'>
            <div className=''>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>1</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>2</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>3</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>4</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white'>5</p>
                </div>
                <div className='h-10 w-0.5 bg-white mx-auto'></div>
                <div
                    className='w-8 h-8 place-content-center grid rounded-full border-4 bg-purple-600'>
                    <p className='text-white font-bold'>🗸</p>
                </div>
            </div>
            <div className='w-full p-5 pl-24'>
                <div className='w-full '>
                    <Lottie animationData={Finish} loop={1} className='w-[15%] mx-auto'/>
                </div>
                <div className='text-white my-7'>
                    <p>I have read and undertand the terms and conditions of the trainings and its all procedures.</p>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    </div>
}
