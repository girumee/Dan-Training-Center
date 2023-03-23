import InputField from "./InputField";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Home/Navbar";
export default function Login() {
  useEffect(() => {
    document.title = "Login | Dan";
  });

  return (
    <div className="w-screen h-Screen ">
      <Navbar />
      <div className="grid grid-cols-2 h-screen">
        <div className=" p-[12%] pt-32 text-center h-1/2">
          <p className="text-3xl font-bold">
            Sign up for Dan Training Center and get certified!{" "}
            <span className="block font-serif italic mt-3">It's Free</span>
          </p>
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
        </div>
        {/* Login part */}
        <div className="p-[10%]">
          <div className="w-5/6 h-auto mx-auto shadow-lg mt-10 rounded-lg pb-20">
            <div className="bg-[#962DFF] p-3 rounded-md">
              <h2 className="font-bold text-white text-lg ml-7">Log In</h2>
            </div>
            <div className="text-center pt-5">
              <InputField name="email" pl="Email" type="text" />
              <InputField name="password" pl="Password" type="password" />
              <div className="text-start flex gap-2 text-base font-semibold my-3 w-2/3 mx-auto">
                <input type="checkbox" className="w-4 " />
                <p>Remember me</p>
              </div>
              <div className="text-start w-2/3 mx-auto">
                <a href="#" className="text-purple-700 font-semibold">
                  forgot Password?
                </a>
              </div>
              <Link to="/admin">
                <input
                  type="button"
                  value="Log In"
                  className="w-2/3 my-4 bg-[#962DFF] text-white font-bold text-xl text-center rounded-xl h-14 shadow-lg"
                />{" "}
              </Link>
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
      </div>
    </div>
  );
}
