import AdminLayer from "../Layer/AdminLayer";
import { MdOndemandVideo } from "react-icons/md";
import {
  BsFillImageFill,
  BsFillFolderSymlinkFill,
  BsThreeDots,
} from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";

export default function Announcement() {
  return (
    <AdminLayer title="Announcement">
      <div className="col-span-7 h-full flex">
        <div className="w-[80%] h-full px-10 py-4">
          <div className="flex bg-slate-400 w-full px-5 pt-10 pb-3 rounded-md">
            {/* first card */}
            <div className=" bg-white p-0.5 border rounded-md w-fit h-fit">
              <img
                src="/assets/Admin/Admin.png"
                alt=""
                className="w-12 h-12 rounded-md"
              />
            </div>
            <div className="w-[90%]">
              <textarea
                className="w-full mx-10 rounded-md p-3"
                placeholder="Write Something"
                rows="5"
              />
              <div className="grid grid-cols-5 mx-10 pt-6">
                <div className="flex bg-white rounded-md w-fit px-2 py-1">
                  <BsFillImageFill className="mx-1 text-2xl fill-blue-500" />
                  <span className="ml-1.5 mr-2 font-semibold font-sans">
                    Image
                  </span>
                </div>
                <div className="flex bg-white rounded-md w-fit px-2 py-1">
                  <MdOndemandVideo className="mx-1 text-2xl fill-blue-500" />
                  <span className="ml-1.5 mr-2 font-semibold font-sans">
                    video
                  </span>
                </div>
                <div className="flex bg-white rounded-md w-fit px-2 py-1">
                  <AiOutlineSchedule className="mx-1 text-2xl fill-blue-500" />
                  <span className="ml-1.5 mr-2 font-semibold font-sans">
                    Schedule
                  </span>
                </div>
                <div className="flex bg-white rounded-md w-fit px-2 py-1">
                  <BsFillFolderSymlinkFill className="mx-1 text-2xl fill-blue-500" />
                  <span className="ml-1.5 mr-2 font-semibold font-sans">
                    Attach
                  </span>
                </div>
                <div className="flex bg-blue-500 rounded-md w-fit px-4 py-1">
                  <span className="font-semibold font-sans text-white">
                    Send
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll ignoredSB hover:ignoreScrollbar pb-5 pr-3 h-[calc(90%-170px)] mt-3">
            <div className="bg-slate-100 shadow-md w-full px-5 pt-10 pb-3 rounded-md mt-8">
              {/* second card */}
              <div className="flex mb-3 w-full justify-between">
                <div className="flex">
                  <div className=" bg-purple-400 p-0.5 border rounded-lg w-fit h-fit">
                    <img
                      src="/assets/Admin/Admin.png"
                      alt=""
                      className="w-12 h-12 rounded-md"
                    />
                  </div>
                  <div className="ml-2">
                    <p>John Doe</p>
                    <p>johndoe@gmail.com</p>
                  </div>
                </div>
                <div className="flex">
                  <p>1 hour ago</p>
                  <BsThreeDots className="text-2xl mx-2" />
                </div>
              </div>
              <div className="text-lg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 shadow-md w-full px-5 pt-10 pb-3 rounded-md mt-8">
              {/* third card */}
              <div className="flex mb-3 w-full justify-between">
                <div className="flex">
                  <div className=" bg-purple-400 p-0.5 border rounded-lg w-fit h-fit">
                    <img
                      src="/assets/Admin/Admin.png"
                      alt=""
                      className="w-12 h-12 rounded-md"
                    />
                  </div>
                  <div className="ml-2">
                    <p>John Doe</p>
                    <p>johndoe@gmail.com</p>
                  </div>
                </div>
                <div className="flex">
                  <p>2 hours ago</p>
                  <BsThreeDots className="text-2xl mx-2" />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="text-lg col-span-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="h-full w-full">
                  <img alt="" src="/assets/activeTrainee.png" className="p-2" />
                </div>
              </div>
            </div>
            <div className="bg-slate-100 shadow-md w-full px-5 pt-10 pb-3 rounded-md mt-8">
              {/* 4 card */}
              <div className="flex mb-3 w-full justify-between">
                <div className="flex">
                  <div className=" bg-purple-400 p-0.5 border rounded-lg w-fit h-fit">
                    <img
                      src="/assets/Admin/Admin.png"
                      alt=""
                      className="w-12 h-12 rounded-md"
                    />
                  </div>
                  <div className="ml-2">
                    <p>John Doe</p>
                    <p>johndoe@gmail.com</p>
                  </div>
                </div>
                <div className="flex">
                  <p>1 hour ago</p>
                  <BsThreeDots className="text-2xl mx-2" />
                </div>
              </div>
              <div className="text-lg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 shadow-md w-full px-5 pt-10 pb-3 rounded-md mt-8">
              {/* 5 card */}
              <div className="flex mb-3 w-full justify-between">
                <div className="flex">
                  <div className=" bg-purple-400 p-0.5 border rounded-lg w-fit h-fit">
                    <img
                      src="/assets/Admin/Admin.png"
                      alt=""
                      className="w-12 h-12 rounded-md"
                    />
                  </div>
                  <div className="ml-2">
                    <p>John Doe</p>
                    <p>johndoe@gmail.com</p>
                  </div>
                </div>
                <div className="flex">
                  <p>2 hours ago</p>
                  <BsThreeDots className="text-2xl mx-2" />
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="text-lg col-span-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="h-full w-full">
                  <img alt="" src="/assets/activeTrainee.png" className="p-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%]  bg-gray-100 mb-10 mr-3 rounded-md p-3">
          <div className="w-full bg-white rounded-md p-2">
            <p className="font-bold mb-3">Upcoming</p>
            <div className="w-full bg-[#9AAFDA] flex justify-between px-1 py-1 text-white text-lg rounded-md my-3">
              <BsFillImageFill className="text-3xl" />
              <p>Test-1</p>
              <p>23/3/2023</p>
            </div>
            <div className="w-full bg-[#9AAFDA] flex justify-between px-1 py-1 text-white text-lg rounded-md my-3">
              <BsFillImageFill className="text-3xl" />
              <p>Test-1</p>
              <p>23/3/2023</p>
            </div>
          </div>
          <div className="w-full h-[75%] bg-white rounded-md p-2 mt-4">
            <p className="font-bold mb-3">Recent Activity</p>
          </div>
        </div>
      </div>
    </AdminLayer>
  );
}
