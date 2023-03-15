// import { useState} from 'react';

export default function ResultCard(props){

    function UpdateNum(){
            console.log(props.number);  
              
    }

    return <div className="content-center text-center" onClick={UpdateNum()} >
        <img src={props.image1} alt="star" className="w-96 h-3/5"></img>
       <h3 className="mt-4 text-2xl">{props.number}</h3>
       <p className="text-2xl">{props.title}</p>
       <p className="w-60 my-2 mx-auto">{props.text}</p>
    </div>
}