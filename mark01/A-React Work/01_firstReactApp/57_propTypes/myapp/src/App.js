import './App.css';
import New1 from './Component/New1';
import New2 from './Component/New2';
import PropTypes from 'prop-types';
import New3 from './Component/New3';
function App() {
  const functioner = () => {
    return "functionFetched"
  }

  function data({name,marks=90}){
    console.log(name);
  }

  // validate
  data.propTypes = {
    name: PropTypes.isRequired,

  }
  return (
    <>
      <div className="row flexSB m2 p1 line w40  ">
        <button className=' m1 p2 brd hm0' onClick={() => data({marks:50})}>Not send prop 'name' to function</button>
        <button className=' m1 p2 brd dbg hm0' onClick={() => data({name:"ram",marks:60})}>send prop 'name' to function</button>
      </div>
      <New1 name="Developer" age={5} />
      <New2 anyProp={5} booleanProp={false} numberProp={678} stringProp="String" functionProp={functioner} arrayProp={[3, 4, 2, 56]} objectProp={{ name: "DEV", age: 56 }} symbolProp={Symbol("hey")} />
   <New3 name="raj" marks={40} total={Math.max(34,54,55)}/>
    </>
  );
}

export default App;
