import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#6A6A6A] mt-14 p-[30px] text-white">
      <footer class=" ">
        <div className="flex flex-col pl-[20px]">
          <h3>Dan Training Center</h3>
          <div className="flex flex-row pl-[79px] pt-[33px]">
            <h3>
              {" "}
              <Link to="#">Home</Link>
            </h3>
            <div className="flex flex-col pl-[150px]">
              <h4 className="pb-3">
                <Link to="">Trainer</Link>{" "}
              </h4>
              <h4>
                <Link to="">Training</Link>
              </h4>
            </div>

            <div className="flex flex-col pl-[150px]">
              <h4 className="pb-3">
                <Link to="/">About</Link>
              </h4>
              <h4>
                <Link to="/">Contact Us</Link>
              </h4>
            </div>

            <div className="flex flex-col pl-[20%]">
              <h3 className="pb-4">Subscribe to our news letter</h3>

              <div className="flex flex-row pl-2">
                <div>
                  <input
                    type="text"
                    id="first_name"
                    class="w-[250px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <button className="bg-[#5D5A88] p-2 ml-5 mb-5 rounded-lg ">
                  Subscribe
                </button>
              </div>

              <div className="mt-[40px]">
                <Link
                  to="/"
                  className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block">
                  <i class="fa-brands fa-twitter"></i>
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block">
                  <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block">
                  <i class="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block">
                  <i class="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-[]">
            <p>
              Copyright
              <br />
              Reserved © Dan Training Center | All Rights
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
