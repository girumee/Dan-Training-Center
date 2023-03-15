import react from "react";


// bg-gradient-to-r from-indigo-50
function Account(){
return <div className="grid grid-cols-2 mb-[100px] bg-gradient-to-r from-indigo-50  text-[#5D5A88]">

<div className="m-[30px] h-[620px]  pl-[150px] pt-[100px]"> 
<p>Create your account and get started for free</p>

<div className="flex flex-col">

<div className="flex row pt-[100px]">

<ul className="list-disc list-inside pr-[85px]">
<li className="pb-2">Soft skill</li>    
<li className="pb-2">Enterprener</li>
<li>Technical skill</li>
</ul>

<div>
<ul className="list-disc list-inside">
<li className="pb-2">Soft skill</li>    
<li>Enterprener</li>
</ul>
</div>
<div>

</div>

</div>

<div className="flex row pt-[50px]">
<button className="bg-[#5D5A88] pl-12 pr-12 pt-2 pb-2 mr-4   text-white rounded-lg">Sign up</button>
<button className="bg-white border pl-12 pr-12 pt-2 pb-2  rounded-lg ">Contact us</button>
</div>
</div>
</div>

<div className="h-[620px] flex row">
<div className="w-262 h-244"><img src="/assets/middle.png" className="absolute pl-[100px] mt-[310px] "></img></div>
<img src="/assets/large.png" className="relative px-[45px] mt-8 "></img>
<img src="/assets/small.png" className="absolute mr-[100px] mt-[300px]"></img>

</div>

</div>
}

export default Account;