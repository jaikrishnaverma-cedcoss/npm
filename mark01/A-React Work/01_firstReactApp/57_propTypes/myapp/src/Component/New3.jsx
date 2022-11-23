import React from 'react'
import PropTypes from 'prop-types';
const New3 = (props) => {
  return (
    <div className="col m2 p1 line">
    <h2 className='line m1 p1 dbg hm0'>Component3</h2>
    <h1>name(String): {props.name}</h1>
    <h1>Marks(number):{props.marks}</h1>
    <h1>Total(number):{props.total}</h1>
 </div>

  )
}

New3.propTypes = {
    name:PropTypes.string,
    marks:PropTypes.number,
    total:PropTypes.number
  }
export default New3