import React from 'react';

function Optioner(props) {
    return ( 
        <>
        {
            props.arr.map((x)=><option value={x}>{x}</option>)
        }
        </>
     );
}

export default Optioner;