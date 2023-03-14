import react from "react";
import FormField from "./FormField";
import Map from "./Map";


function Footer(){
return<div className="bg-[#6A6A6A] mt-14 p-[30px] text-white">
<footer class=" ">
      <div className="flex flex-col pl-[20px]">
      <h3 >Dan Training Center</h3>

      <div className="flex flex-row pl-[79px] pt-[33px]">
      <h3> <a href="#">Home</a></h3>

      <div className="flex flex-col pl-[150px]">
      <h4 className="pb-3"><a href="">traniner</a> </h4>
      <h4><a href="">course</a></h4>
      </div>

      <div className="flex flex-col pl-[150px]">
      <h4 className="pb-3"><a href="">About</a></h4>
      <h4><a href="">Contact Us</a></h4>
      </div>

      <div className="flex flex-col pl-[20%]">
      <h3 className="pb-4">Subscrib to our news letter</h3>

      <div className="flex flex-row pl-2">
      <div>
      <input type="text" id="first_name" class="w-[250px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
      </div>
      <button className="bg-[#5D5A88] p-2 ml-5 mb-5 rounded-lg ">Subscribe</button>
      </div>

      <div className="mt-[40px]">
      <a href="#" className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block pt-1"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#" className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block pt-1"><i class="fa-brands fa-twitter"></i></a>
      <a href="#" className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block pt-1"><i class="fa-brands fa-instagram"></i></a>
      <a href="#" className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block pt-1"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="#" className="w-10 h-10 rounded-lg pt-[5px] text-center bg-white text-[#8D8BA7] hover:bg-[#5D5A88] mx-1 inline-block pt-1"><i class="fa-brands fa-youtube"></i></a>
      </div>

      </div>
      </div>
      <div className="pt-[]">
      <p>Copyright<br/>Reserved © Dan Traning Center | All Rights
      </p>
      </div>
      </div>

</footer>
</div>
}

export default Footer;