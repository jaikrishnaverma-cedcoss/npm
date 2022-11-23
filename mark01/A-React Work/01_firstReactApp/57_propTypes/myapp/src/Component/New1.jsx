import React from 'react'
import PropTypes from 'prop-types';
function New1(props) {
  return (
    <>
 <div className="col m2 p1 line">
    <h2 className='line m1 p1 dbg hm0'>Component1</h2>
    <h1>name(String): {props.name}</h1>
    <h1>age(number):{props.age}</h1>
 </div>
    </>
  )
}
New1.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  };
export default New1