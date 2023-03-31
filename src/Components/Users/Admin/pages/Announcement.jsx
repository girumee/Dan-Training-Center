import AdminLayer from "../Layer/AdminLayer";

export default function Announcement() {
  return (
    <AdminLayer title='Announcement'>
      <div className="col-span-7 h-full flex">
        <div className="w-[80%] h-full px-10 py-4">
      
          <div className="flex bg-gray-600 w-full px-5 py-10 rounded-md">{/* first card */}
              <div className=" bg-white p-0.5 border rounded-md w-fit h-fit">
                  <img src="./public/assets/Admin/Admin.png" alt="" className="w-12 h-12 rounded-md"/>
              </div>
              <div className="w-[90%]">
                <textarea className="w-full mx-10 rounded-md p-3" placeholder="Write Something" rows='5'/>
              </div>
          </div>
        </div>
        <div className="w-[20%] h-full bg-blue-200">

        </div>
      </div>
    </AdminLayer>
  );
}
