

export default function AdminButton(props){
    
    return <div className='text-center'>
             <div className={(props.name==="Member")? "bg-white w-fit rounded-full p-3 mx-auto mb-0 mt-2" : "bg-none w-fit rounded-full p-3 mx-auto"} >
                 {props.icon}
             </div>
             <p className='text-white p-0 mt-0 align-top '>{props.name}</p>
        </div>
}