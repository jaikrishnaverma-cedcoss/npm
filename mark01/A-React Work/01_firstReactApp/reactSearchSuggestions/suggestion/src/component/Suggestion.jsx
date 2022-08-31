import React, { Component } from 'react';
class Suggestion extends Component {
    state = {}
    render() {
        return (
            <>
                <span>
                    {
                        this.props.arr.map((x) => {
                            return <div onClick={this.props.selectedval} id="inpux">{
                                x.split('').map((char, i) => {
                                    if (i >= x.indexOf(this.props.searchTerm) && i <= x.indexOf(this.props.searchTerm) + this.props.searchTerm.length - 1) {
                                        return <span style={{ color: 'red' }}>{char}</span>;
                                    } else {
                                        return <span>{char}</span>;
                                    }
                                })}</div>
                        })
                    }
                </span>

            </>
        );
    }
}

export default Suggestion;