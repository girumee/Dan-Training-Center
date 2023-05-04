export default function FeedbackUser(props) {
    return <div onClick={()=>{props.detail();}}>
        <div className="grid grid-cols-4 justify-between px-4 py-3 hover:shadow-lg hover:rounded-xl hover:ml-3">
            <div className="flex">
                <img src="/assets/Admin/member.png" alt="" className="rounded-2x w-10"/>
                <h2 className="font-bold text-lg ml-5">John Doe</h2>
            </div>
            <h2 className="font-semibold text-lg ">johndoe@gmail.com</h2>
            <h2 className="font-semibold text-lg ">Active</h2>
            <div className=" flex gap-3">
                <div className="w-full h-2 bg-gray-300 rounded-lg mt-2.5">
                    <div className="w-[90%] h-2 bg-purple-500 border rounded-lg"></div>
                </div>
                <p className='font-bold text-xl'>90%</p>
            </div>
        </div>
      <div className="mx-auto w-[90%] border-t border-gray-200 mt-1"></div>
    </div>
}