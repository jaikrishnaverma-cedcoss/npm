import React from 'react';
function BrandsCard(props) {
    return ( 
        <>
        <div className="card cardh">
            <img src={props.image} alt=""  />
            <h4>{props.heading}</h4>
        </div>
        </>
     );
}

export default BrandsCard;