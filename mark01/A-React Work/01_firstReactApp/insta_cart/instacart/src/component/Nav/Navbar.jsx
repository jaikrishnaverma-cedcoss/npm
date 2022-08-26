import React from 'react';
import "./navStyle.css";
function Navbar() {
    return ( 
        <>
        <div className="nav">
        <span className='row flexAIC' style={{width:"17%"}}><i class="fa fa-bars hamburger" aria-hidden="true"></i> <img style={{marginLeft:"6%"}} src="logoinsta.webp"/></span>
        {/* <img id="gol" src="gol.png" alt="" /> */}
        <div className="searchbox">
            <input type="text" placeholder="Search products, stores, and recipes" /><i class="fa fa-search" aria-hidden="true"></i>
        </div>
      <span style={{color:"white",fontWeight:"600"}}>  <i class="hamburger fa fa-map-marker" aria-hidden="true"></i> 234234</span>
      <button className="btn">Log in</button>
         <button className="btn btn-success"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>3</span></button>
         
        </div>
        </>
     );
}

export default Navbar;