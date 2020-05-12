import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    explode = () => {
        
        if (this.state.secondsLeft < 1) {
            return 'Boom!'
        } else {

            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    } 

    render() {
        return (
            <div>
              {this.explode()}
            </div>
        );
    }
    
}


export default Bomb;
