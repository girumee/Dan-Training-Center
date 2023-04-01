import { CiSearch } from "react-icons/ci";
import AdminLayer from "../Layer/AdminLayer";
import AdminTrainingCard from "../Constant/AdminTrainingCard";

export default function Trainings() {
  return (
    <AdminLayer title='Trainings'>
      <div className="h-[60] bg-[#9AAFDA]">
        <div className="flex pt-2">
          <div className="bg-white ml-2 w-[30%] text-center rounded-t-lg">
            <button className="">All 9</button>
            <div className="w-full bg-[#742BDA] mt-3 h-1 "></div>
          </div>
          <div className="bg-white ml-2 w-[60%] text-center rounded-t-lg">
            <button>Soft Skill 9</button>
          </div>
          <div className="bg-white ml-2 w-full text-center rounded-t-lg">
            <button>Entrepreneur Skill 9</button>
          </div>
          <div className="bg-white ml-2 w-[70%] text-center rounded-t-lg">
            <button>Technical Skill 9</button>
          </div>
          <div className=" ml-2 text-center rounded-t-lg">
            <div className=" bg-slate-200 rounded-md p-1 flex mr-2">
              <input
                type="search"
                className="text-center rounded-md bg-slate-200"></input>
              <p className="mt-1 text-gray">|</p>
              <CiSearch className="h-6 w-6 text-[#962DFF] mt-1.5 mr-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-scroll h-[82%] ignoreScrollbar">
        <div className="grid grid-cols-3 grid-rows-2 gap-y-8">
          {/*un used div*/}
          <AdminTrainingCard />
          <AdminTrainingCard />
          <AdminTrainingCard />
          <AdminTrainingCard />
          <AdminTrainingCard />
          <AdminTrainingCard />
        </div>
      </div>
    </AdminLayer>
  );
}
