// /* eslint-disable jsx-a11y/anchor-is-valid */ import { Link } from
// "react-router-dom"; import React, { useEffect, useState } from "react"; //
// import axios from "axios";

import Navbar from "../Home/Navbar";
import InputField from "./InputField";
import { Link } from "react-router-dom";

// import "./Login.css"; import Navbar from "../Home/Navbar"; // const baseUrl =
// "http://127.0.0.1:8000/api"; function Login() {   useEffect(() => {
// document.title = "Teacher Login | Dan";   });   //   //useState   //   const
// [teacherLoginData, setTeacherLoginData] = useState({   //     email: "", //
// password: "",   //   });   //   //start Change Element Value   // const
// handleChange = (event) => {   //     setTeacherLoginData({   //
// ...teacherLoginData,   //       [event.target.name]: event.target.value,   //
//     });   //   };   //   // End Change Element Value   //   //start Submit
// Form   //   const submitForm = () => {   //     const teacherFormData = new
// FormData();   //     teacherFormData.append("email", teacherLoginData.email);
//   //     teacherFormData.append("password", teacherLoginData.password);   //
// try {   //       axios.post(baseUrl + "/teacher-login",
// teacherFormData).then((res) => {   //         if (res.data.bool === true) //
//       localStorage.setItem("teacherLoginStatus", true);   //
// localStorage.setItem("teacherId", res.data.teacher_id);   //
// window.location.href = "/teacher-dashboard";   //       });   //     } catch
// (error) {   //       console.log(error);   //     }   //   };   //   //End
// Submit Form   //   const teacherLoginStatus =
// localStorage.getItem("teacherLoginStatus");   //   if (teacherLoginStatus ===
// "true") {   //     window.location.href = "/teacher-dashboard";   //   }
// return (     <div className="w-full h-full">       <Navbar />       <div
// className="w-full h-screen px-24 pt-28">         <div className="grid
// grid-cols-2 row1 relative px-auto shadow-xlg">           {/* <div
// className="grid grid-cols-2 row1"> */}           {/* {teacherData.status ==
// "success" && (         <p className="text-success text-center">Thanks for
// your Registration</p>       )} */}           {/* {teacherData.status ==
// "error" && (         <p className="text-danger text-center">Something went
// wrong</p>       )} */}           <div className="w-[70%]">             <img
// src="./assets/dan1.gif" className="w-full h-scree" alt="" />           </div>
//           <div className="row">             <div className="col-lg-6 px-5
// pt-5">               <h1 className="font-weight-bold ">Trainer Log in</h1>
// <form>                 <div className="form-row">  <div
// className="form-floating mb-2 col-lg-9">                     <input //
// value={teacherLoginData.email}                       //
// onChange={handleChange}                       name="email"    type="email"
//           className="form-control"        id="email" placeholder="Email
// Address"           />                     <label
// htmlFor="floatingInput">Email Address</label>                   </div> <div
// className="form-floating mb-2 col-lg-9"> <input             //
// value={teacherLoginData.password} // onChange={handleChange} name="password"
// type="password" className="form-control" id="password" placeholder="********"
//               />                   <label
// htmlFor="floatingInput">Password</label>       </div>     </div>  </form>
//       {/* <div>       <input                 type="checkbox"
// className="form-check-input"                id="checkbox"               />
//   <label className="form-check-label">Remember</label> </div> */} <div
// className="form-row mb-2 row">                 <div className="col-sm-9">
//           <button                     // onClick={submitForm}
// type="submit" className="btn1 mt-3 mb-4">                     {" "} Login
//               </button> </div>               </div> <Link to="#">Forget
// password</Link>               <p className="py-2">          {" "}
// Don't have an account?{" "}                 <Link
// to="/teacher-register">Register Here</Link>               </p> {/* end form
// */} </div>           </div>   </div>       </div> </div>     // </div>  ); }
// export default Login;

export default function Login() {
    return <div className="w-screen h-Screen ">
        <Navbar/>
        <div className="grid grid-cols-2 h-screen overflow-clip">

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
                        <h2 className="font-bold text-white text-lg ml-7">Log In</h2>
                    </div>
                    <div className="text-center pt-5">
                        <InputField name='email' pl='Email' type='text'/>
                        <InputField name='password' pl='Password' type='password'/>
                        <div className="text-start flex gap-2 text-base font-semibold my-3 w-2/3 mx-auto">
                        <input type="checkbox" className="w-4 "/>
                        <p>Remember me</p>
                        </div>
                        <div className="text-start w-2/3 mx-auto">
                        <a href="#" className="text-purple-700 font-semibold">forgot Password?</a>
                        </div>
                        <Link to='/admin'><input type="button" value='Log In' className='w-2/3 my-4 bg-[#962DFF] text-white font-bold text-xl text-center rounded-xl h-14 shadow-lg' /> </Link>
                        <div className="w-2/3 mx-auto text-start">
                        <p className="">Don’t have an account? <Link to='/register' className="pl-3 text-purple-700 font-semibold">Create now for free</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
