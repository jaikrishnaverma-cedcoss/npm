import React, { Component } from 'react';
class Comp1 extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <h1>Hello {this.props.name}</h1>
            </>
        );
    }
}
 
export default Comp1;