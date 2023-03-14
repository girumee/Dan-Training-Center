

export default function ChooseUs (){
    return <div className="w-full h-screen flex">
        <div className='w-1/2 text-left pl-20 py-20'>
            <p>Why choose us?</p>
            <p className='pt-5 w-4/5 text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.</p>
            <p className='mt-24 w-4/5 text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.</p>
            <button className='rounded-full bg-[#962DFF] py-3 px-5 text-white text-lg mt-14'>Learn More</button>
        </div>
        <div className='w-1/2 py-24'>
            <iframe className="h-full w-4/5 rounded-xl"
      src={`https://www.youtube.com/embed/TMKJiVxrEqI`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"></iframe>
        </div>
    </div>
}