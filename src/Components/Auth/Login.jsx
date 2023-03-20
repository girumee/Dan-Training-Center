/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import axios from "axios";

import "./Login.css";
import Navbar from "../Home/Navbar";

// const baseUrl = "http://127.0.0.1:8000/api";

function Login() {
  useEffect(() => {
    document.title = "Teacher Login | Dan";
  });

  //   //useState
  //   const [teacherLoginData, setTeacherLoginData] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   //start Change Element Value
  //   const handleChange = (event) => {
  //     setTeacherLoginData({
  //       ...teacherLoginData,
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  //   // End Change Element Value

  //   //start Submit Form
  //   const submitForm = () => {
  //     const teacherFormData = new FormData();
  //     teacherFormData.append("email", teacherLoginData.email);
  //     teacherFormData.append("password", teacherLoginData.password);
  //     try {
  //       axios.post(baseUrl + "/teacher-login", teacherFormData).then((res) => {
  //         if (res.data.bool === true)
  //           localStorage.setItem("teacherLoginStatus", true);
  //         localStorage.setItem("teacherId", res.data.teacher_id);
  //         window.location.href = "/teacher-dashboard";
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   //End Submit Form

  //   const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  //   if (teacherLoginStatus === "true") {
  //     window.location.href = "/teacher-dashboard";
  //   }

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-full h-screen px-24 pt-28">
        <div className="grid grid-cols-2 row1 relative px-auto shadow-xlg">
          {/* <div className="grid grid-cols-2 row1"> */}
          {/* {teacherData.status == "success" && (
        <p className="text-success text-center">Thanks for your Registration</p>
      )} */}
          {/* {teacherData.status == "error" && (
        <p className="text-danger text-center">Something went wrong</p>
      )} */}
          <div className="w-[70%]">
            <img src="./assets/dan1.gif" className="w-full h-scree" alt="" />
          </div>
          <div className="row">
            <div className="col-lg-6 px-5 pt-5">
              <h1 className="font-weight-bold ">Trainer Log in</h1>

              <form>
                <div className="form-row">
                  <div className="form-floating mb-2 col-lg-9">
                    <input
                      // value={teacherLoginData.email}
                      // onChange={handleChange}
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>

                  <div className="form-floating mb-2 col-lg-9">
                    <input
                      // value={teacherLoginData.password}
                      // onChange={handleChange}
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="********"
                    />
                    <label htmlFor="floatingInput">Password</label>
                  </div>
                </div>
              </form>
              {/* <div>
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
              />
              <label className="form-check-label">Remember</label>
            </div> */}
              <div className="form-row mb-2 row">
                <div className="col-sm-9">
                  <button
                    //   onClick={submitForm}
                    type="submit"
                    className="btn1 mt-3 mb-4">
                    {" "}
                    Login
                  </button>
                </div>
              </div>
              <Link to="#">Forget password</Link>
              <p className="py-2">
                {" "}
                Don't have an account?{" "}
                <Link to="/teacher-register">Register Here</Link>
              </p>
              {/* end form */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Login;
