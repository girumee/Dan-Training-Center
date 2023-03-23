import Navbar from "../Home/Navbar";
import InputField from "./InputField";
import { Link } from "react-router-dom";

export default function Register() {
    return <div className="w-screen h-Screen ">
        <Navbar/>
        <div className="grid grid-cols-2 h-screen">

            <div className=" p-[12%] pt-32 text-center h-1/2">
                <p className="text-3xl font-bold">Sign up for Dan Training Center and get certified! <span className="block font-serif italic mt-3">It's Free</span></p>
                <div className=" w-2/3 h-auto mx-auto mt-5">
                    <div className="flex flex-col -space-y-16 ">
                        <img alt="" src="/assets/loginside.png" className="flex"/>
                        <div className="w-full h-[200px] ">
                            <svg className="w-full h-full ">
                                <ellipse
                                    cx="40%"
                                    cy="40%"
                                    rx="35%"
                                    ry="20%"
                                    className="fill-slate-200 myshadow"/> {/*this is only for shadow */}
                                <ellipse cx="40%" cy="40%" rx="35%" ry="25%" className="fill-white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login part */}
            <div className="p-[10%]">
                <div className="w-5/6 h-auto mx-auto shadow-lg mt-10 rounded-lg pb-20">
                    <div className="bg-[#962DFF] p-3 rounded-md">
                        <h2 className="font-bold text-white text-lg ml-7">Register</h2>
                    </div>
                    <div className="text-center pt-5">
                        <InputField name='email' pl='Email' type='text'/>
                        <InputField name='password' pl='Password' type='password'/>
                        <InputField name='confirmpassword' pl='Confirm Password' type='password'/>
                        <div className="text-start flex gap-2 text-base font-semibold my-3 w-2/3 mx-auto">
                        <input type="checkbox" className="w-4 "/>
                        <p>I will accept all the privacy policy rules</p>
                        </div>
                        <input type="button" value='Register' className='w-2/3 my-4 bg-[#962DFF] text-white font-bold text-xl text-center rounded-xl h-14 shadow-lg' />
                        <div className="w-2/3 mx-auto text-start">
                        <p className="">Already have an account? <Link to='/login' className="pl-3 text-purple-700 font-semibold">LogIn</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
