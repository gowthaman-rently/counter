import React, { Component } from 'react';
import { decrement, increment } from './actions';
import { connect } from 'react-redux';
import ClassPresentation from './classPresentation';

// class ClassComponent extends Component {
//     state = { counter : store.getState().counter } 
//     updateState(){
//         this.setState({
//             counter: store.getState().counter
//         })
//     }
//     render() { 
//         store.subscribe(()=>this.updateState());
//         return (
//             <div>
//                 <h1>{this.state.counter}</h1>
//                 <Button variant='contained' sx={{mx:2}} onClick={()=>store.dispatch(increment())}>+</Button>
//                 <Button variant='contained' sx={{mx:2}} onClick={()=>store.dispatch(decrement())}>-</Button>
//             </div>
//         );

//     }
// }

// export default ClassComponent;


class ClassComponent extends Component {
    render() { 
        return (<ClassPresentation counter={this.props.counter} increment={this.props.increment} decrement={this.props.decrement}/>);
    }
}

const mapStateToProps = (state, parentProps) =>{
    return(state)
}

const mapDispatchToProps = (dispatch)=>{
    return {
        increment :()=>{dispatch(increment())},
        decrement : ()=>{dispatch(decrement())}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ClassComponent);