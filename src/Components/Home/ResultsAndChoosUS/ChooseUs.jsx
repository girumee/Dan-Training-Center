

export default function ChooseUs (){
    return <div className="w-full h-screen flex">
        <div className='w-1/2 text-left pl-20 py-20'>
            <p>Why choose us?</p>
            <p className='pt-5 w-4/5 text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.</p>
            <button className='rounded-full bg-[#962DFF] py-3 px-5 text-white text-lg mt-5'>Learn More</button>
            <div className='w-5/6 h-1/2 mt-14'>
            <iframe className="h-full w-full rounded-xl"
                src={`https://www.youtube.com/embed/TMKJiVxrEqI`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"></iframe>
            </div>
        </div>
        <div className='w-1/2 h-full'>
            <div className="h-1/2 pr-24">
                <img src="/assets/middle.png" className="absolute m-40 ml-80 w-80" alt=""></img>
                <img src="/assets/large.png" className="absolute mt-8 w-80 ml-60" alt=""></img>
                <img src="/assets/small.png" className="absolute w-56 mt-48 ml-48" alt=""></img>
            </div>
            <div className="h-1/2 w-full bg-white bg-opacity-30">
                <div className="m-10"> 
                    <p>Create your account and get started for free</p>
                 <div className="flex flex-col">
                  <div className="flex row pt-10">
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
            <div className="flex row pt-10">
            <button className="bg-[#5D5A88] px-12 py-2 mr-4   text-white rounded-lg">Sign up</button>
            <button className="bg-transparent border px-12 py-2 text-[#5D5A88] rounded-lg ">Contact us</button>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
}