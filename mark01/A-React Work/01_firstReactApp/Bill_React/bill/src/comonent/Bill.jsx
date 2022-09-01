import React, { Component } from 'react';
class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = { unit: "", amount: 0 }
    }
    range = 0;
    Valu = (event) => {
        this.setState({ unit: parseInt(event.target.value) })
    }
    Calculate = (event) => {
        let temp = 0;
        let units=this.state.unit;
        if (units > 50) {
            temp=50*3.5;
            units=units-50;
            if (units > 100) {
                temp=100*4;
                units=units-100;
                if (units > 100) {
                    temp=100*5.2;
                    units=units-100;
                    if (units > 0) {
                            temp=units*6.5;
                            units=0   
                    }
                    } else {
                   temp+=units*5.2;
                }
            } else {
                temp+=units*4;
                units=0
            }

        } else {

            temp+=units*3.5;
            units=0
        }
        this.setState({ amount: temp });

    }
    render() {
        return (
            <>
                <div className="col">
                    <h1>Electricity Bill Calculator</h1>
                    <input type="number" value={this.state.unit} placeholder="Enter The Total Unit." onChange={this.Valu} />
                    <button className='btn btn-success' onClick={this.Calculate}>Calculate</button>
                    <br />
                    <br />
                    <p>{`The Total Amount : ${this.state.amount}`}</p>
                </div>
            </>
        );
    }
}

export default Bill;