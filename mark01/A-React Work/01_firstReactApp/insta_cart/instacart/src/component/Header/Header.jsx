import React from 'react';
import BrandsCard from './BrandsCard';
import './headerRow.css'
function Header() {
    return ( 
        <>
        <div className="row flexJCC header" style={{height:"167px"}}>
            <div className="row flexJCC header inner" style={{width:"95%"}}>
            <BrandsCard image="brand5.webp" heading="grapter"/>
            <BrandsCard image="brand1.webp" heading="grapter"/>
            <BrandsCard image="brand2.webp" heading="grapter"/>
            <BrandsCard image="brand3.webp" heading="grapter"/>
            <BrandsCard image="gol.png" heading="grapter"/>
            <BrandsCard image="brand4.webp" heading="grapter"/>
            <BrandsCard image="brand6.webp" heading="grapter"/>
            <BrandsCard image="brand5.webp" heading="grapter"/>
            <BrandsCard image="brand1.webp" heading="grapter"/>
            <BrandsCard image="brand2.webp" heading="grapter"/>
            <BrandsCard image="brand3.webp" heading="grapter"/>
            <BrandsCard image="gol.png" heading="grapter"/>
            <BrandsCard image="brand4.webp" heading="grapter"/>
            <BrandsCard image="brand6.webp" heading="grapter"/>
       
            </div>
             </div>
        </>
     );
}

export default Header;