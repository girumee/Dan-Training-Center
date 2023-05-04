// import InputField from "./InputField";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import Navbar from "../Home/Navbar";
import axios from "axios";
// import InputField from "./InputField";

const baseUrl = "http://127.0.0.1:8000/api";

export default function NewLogin() {
  useEffect(() => {
    document.title = "Login | Dan";
  });

  //useState
  const [adminLoginData, setadminLoginData] = useState({
    email: "",
    password: "",
  });

  //start Change Element Value
  const handleChange = (event) => {
    setadminLoginData({
      ...adminLoginData,
      [event.target.name]: event.target.value,
    });
  };
  // End Change Element Value start Submit Form
  const submitForm = () => {
    console.log(adminLoginData);
    const adminFormData = new FormData();
    adminFormData.append("email", adminLoginData.email);
    adminFormData.append("password", adminLoginData.password);

    axios
      .post(baseUrl + "/login", adminFormData)
      .then((res) => {
        if (res.data.bool === true) {
          localStorage.setItem("adminLoginStatus", true);
          // localStorage.setItem("adminId", res.data.admin_id);
          window.location.href = "/admin";
        } else {
          console.log("Invalid Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //End Submit Form

  const LoginStatus = localStorage.getItem("adminLoginStatus");
  if (LoginStatus === true) {
    window.location.href = "/admin";
  }

  return (
    <div className="w-screen h-Screen ">
      <Navbar />
      < className="grid grid-cols-2 h-screen">
        <div className=" p-[12%] pt-32 text-center h-1/2">
          <Link to={"/newLogin"}><p className="text-3xl font-bold">
            Sign up for Dan Training Center and get certified!{" "}
            <span className="block font-serif italic mt-3">It's Free</span>
          </p></Link>
          <div className=" w-2/3 h-auto mx-auto mt-5">
            <div className="flex flex-col -space-y-16 ">
              <img alt="" src="/assets/loginside.png" className="flex" />
              <div className="w-full h-[200px] ">
                <svg className="w-full h-full ">
                  <ellipse
                    cx="40%"
                    cy="40%"
                    rx="35%"
                    ry="20%"
                    className="fill-slate-200 myshadow"
                  />{" "}
                  {/*this is only for shadow */}
                  <ellipse
                    cx="40%"
                    cy="40%"
                    rx="35%"
                    ry="25%"
                    className="fill-white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 pt-5">
            <form>
              <div className="p-[10%]">
                <div className="w-5/6 h-auto mx-auto shadow-lg mt-10 rounded-lg pb-20">
                  <div className="bg-[#962DFF] p-3 rounded-md">
                    <h2 className="font-bold text-white text-lg ml-7">
                      Log In
                    </h2>
                  </div>
                  <div className="text-center pt-5">
                    <input
                      className="border-2 w-2/3 my-4 border-[#962DFF] text-center rounded-md h-14 shadow-lg placeholder:pl-4 placeholder:text-lg"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={adminLoginData.email}
                      onChange={handleChange}
                    />
                    <input
                      className="border-2 w-2/3 my-4 border-[#962DFF] text-center rounded-md h-14 shadow-lg placeholder:pl-4 placeholder:text-lg"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={adminLoginData.password}
                      onChange={handleChange}
                    />
                    <div className="text-start flex gap-2 text-base font-semibold my-3 w-2/3 mx-auto">
                      <input type="checkbox" className="w-4 " />
                      <p>Remember me</p>
                    </div>
                    <div className="text-start w-2/3 mx-auto">
                      <Link to="#" className="text-purple-700 font-semibold">
                        forgot Password?
                      </Link>
                    </div>
                    <input
                      onClick={submitForm}
                      type="submit"
                      value="Log In"
                      className="w-2/3 my-4 bg-[#962DFF] text-white font-bold text-xl text-center rounded-xl h-14 shadow-lg"
                    />{" "}
                    <div className="w-2/3 mx-auto text-start">
                      <p className="">
                        Don’t have an account?{" "}
                        <Link
                          to="/register"
                          className="pl-3 text-purple-700 font-semibold">
                          Create now for free
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
  )
}
