import React from 'react'
import PropTypes from 'prop-types';
const New2 = (props) => {
  return (
    <>
            <div className="col m2 p1 line">
            <h2 className='line m1 p1 dbg hm0'>Component2</h2>
           <table>
        <thead>
        <tr>
                <th>TYPE</th>
                <th>CLASS</th>
                <th>EXAMPLE</th>
            </tr>
        </thead>
          <tbody>
          <tr>
                <td>anyProp</td>
                <td> PropTypes.any</td>
                <td>{props.anyProp}</td>
            </tr>
            <tr>
                <td>booleanProp</td>
                <td>PropTypes.bool</td>
                <td>{props.booleanProp.toString()}</td>
            </tr>
            <tr>
                <td>numberProp</td>
                <td>PropTypes.number</td>
                <td>{props.numberProp}</td>
            </tr>
            <tr>
                <td>stringProp</td>
                <td>PropTypes.string</td>
                <td>{props.stringProp}</td>
            </tr>
            <tr>
                <td>functionProp</td>
                <td>PropTypes.func</td>
                <td>{props.functionProp()}</td>
            </tr>
            <tr>
                <td>arrayProp</td>
                <td>PropTypes.array</td>
                <td>{props.arrayProp}</td>
            </tr>
            <tr>
                <td>objectPerop</td>
                <td>PropTypes.object</td>
                <td>{ JSON.stringify(props.objectProp)}</td>
            </tr>
            <tr>
                <td>symbolProp</td>
                <td>PropTypes.symbol</td>
                <td>{props.symbolProp}</td>
            </tr>
          </tbody>
           </table>
           </div>
         
    </>
  )
}
New2.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func,
    arrayProp: PropTypes.array,
    objectPerop: PropTypes.object,
    symbolProp: PropTypes.symbol,
  }
export default New2