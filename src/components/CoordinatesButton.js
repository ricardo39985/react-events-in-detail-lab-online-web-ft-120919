// Code CoordinatesButton Component Here
import React, { Component } from 'react'
export default class CoordinatesButton extends Component {
    constructor(props){
        super(props)

    }
    clicky = (e)=>{
        this.props.onReceiveCoordinates([e.clientX, e.clientY])

    }
    
    render() {
        return (
            <div>
                <button onClick={this.clicky}></button>
            </div>
        )
    }
};
