import React, { Component } from 'react';
import store from './store';

class ClassComponent extends Component {
    state = {  } 
    render() { 
        store.subscribe(() => console.log(store.getState()))
        return (<>{store.getState().value}</>);
    }
}

export default ClassComponent;