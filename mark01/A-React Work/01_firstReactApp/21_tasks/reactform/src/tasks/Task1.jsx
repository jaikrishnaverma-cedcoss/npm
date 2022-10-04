import React, { useState } from 'react';
function Task1() {
    const [input,setInput]=useState("")
    const [para,setPara]=useState("")
    const inpuHandler=(event)=>{
        if(!isNaN(event.target.value))
        setInput(event.target.value)
    }
    const showsdata=()=>
    {
        setPara(input)
    }
    return ( 
        <>
        <div className="row">
            <textarea style={{padding:"10px"}} onChange={inpuHandler} value={input} id="" cols="30" rows="10"></textarea>
            <button className="btn btn-danger" onClick={showsdata}>Check</button>
        </div>
        <div className="row">
            <p>{para}</p>
        </div>
        </>
     );
}

export default Task1;