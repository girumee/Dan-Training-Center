import React from "react";

function FormField() {
  return (
    <div>
      <div
        className="flex flex-col w-2/5 shadow-lg bg-white absolute mt-[10%] ml-[100px] pl-[40px] rounded-lg"
        id="getintouch">
        <div className="mt-[50px]">
          <h3 className="font-bold">Get in touch</h3>
        </div>
        <div className="flex flex-row mt-4">
          <form className="">
            <div className="flex gap-16">
              <div>
              <div><label>Name</label></div>
              <input
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-indigo-300"
                type="text"
                placeholder="Jone Carter"
              />
              </div>
              <div>
              <div><label>Phone</label></div>
              <input
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-indigo-300"
                type="text "
                placeholder="phone"
              />
              </div>
            </div>
            <div className="flex gap-16 mt-6">
            <div>
            <div><label>Email</label></div>
              <input
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-indigo-300"
                type="text"
                placeholder="example@gmail.com"
              />
              </div>
              <div>
              <div><label>Company</label></div>
              <input
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-indigo-300"
                type="text"
                placeholder="Dan Energy"
              />
              </div>
            </div>
       
            <label className="pt-3">Leave us a message</label>
          <div className="">
            
            <textarea
              class="p-2 rounded-lg border border-slate-300 hover:border-indigo-300 mt-2"
              placeholder="please type the message hear"
              cols={50}
              rows={5}>
              </textarea>
          </div>
          <div className= "">
              <button className="p-3 mb-5 pb-3 rounded-lg w-40  text-center ">Send Message</button>
              </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default FormField;
