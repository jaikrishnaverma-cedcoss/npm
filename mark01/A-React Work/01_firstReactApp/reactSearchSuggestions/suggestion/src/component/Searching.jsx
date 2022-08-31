import React, { Component } from 'react';
import Suggestion from './Suggestion';
class Searching extends Component {
    constructor(props) {
        super(props);

    this.state = {data:["jai","aman","anshika","rita pal","sudha","vaishali"],value:"",search:[]}
    }
    changeVal=(event)=>
    {
        this.setState({value:event.target.value},()=>{
            
            this.state.search=this.state.data.filter((item) => {
            return (
              item.toLowerCase().includes(this.state.value)
            );
          })
        this.setState({search:this.state.search})
        })
    }
    selectedval=(event)=>
    {
        this.setState({value:event.target.innerText});
    }
    
    render() { 
        return ( 
            <>
          
            <div style={{width:"30%"}}>
            <div id="inpu"><input type="text" onChange={this.changeVal} value={this.state.value}/> <button>X</button></div>
            <Suggestion arr={this.state.search} selectedval={this.selectedval} searchTerm={this.state.value}/>
               </div>
            </>
         );
    }
}
 
export default Searching;