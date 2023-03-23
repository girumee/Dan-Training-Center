import React from "react";

function FormField() {
  return (
    <div>
      <div
        className="flex flex-col w-2/5 shadow-lg bg-white absolute mt-[10%] ml-[100px] pl-[40px] rounded-lg"
        id="getintouch">
        <div className="mt-[50px]">
          <h3 className=" pb-4">Get in touch</h3>
        </div>
        <div className="flex flex-row mt-[40px]">
          <form className="">
            <div className="flex flex-col">
              <label>Name</label>
              <input
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-indigo-300"
                type="text"
                placeholder="Jone Carter"
              />
              <label>Phone</label>
              <input
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-indigo-300"
                type="text "
                placeholder="phone"
              />
            </div>
          </form>
          <form>
            <div className="flex flex-col pl-5">
              <label>Email</label>
              <input
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-indigo-300"
                type="text"
                placeholder="example@gmail.com"
              />
              <label>Company</label>
              <input
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-indigo-300"
                type="text"
                placeholder="Dan Energy"
              />
            </div>
          </form>
        </div>
        <form>
          <div className="pt-2">
            <label>Leave us a message</label>
            <textarea
              class="px-4 py-2 rounded-lg border border-slate-300 hover:border-indigo-300 mt-2"
              placeholder="please type the message hear"
              cols={50}
              rows={5}></textarea>
            <button className="p-3 mb-5 rounded-lg ">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormField;
