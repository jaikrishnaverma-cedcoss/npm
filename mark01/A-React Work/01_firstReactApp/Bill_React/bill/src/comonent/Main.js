import React, { Component } from 'react';
import Bill from './Bill';
class Main extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <Bill />
            </>
         );
    }
}
 
export default Main;