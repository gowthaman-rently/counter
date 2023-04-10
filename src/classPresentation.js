import React, { Component } from 'react';
import { Button } from '@mui/material';

class ClassPresentation extends Component {
    render() { 
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <Button variant='contained' sx={{mx:2}} onClick={this.props.increment}>+</Button>
                <Button variant='contained' sx={{mx:2}} onClick={this.props.decrement}>-</Button>
            </div>
        );
    }
}
 
export default ClassPresentation;