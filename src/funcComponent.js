import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function FuncComponent() {
    const count = useSelector(state =>state);
    console.log(count);
    const dispatch = useDispatch();
    
    return (
        <div className="App">
        <div>Counter : {count.value}</div>
        <button onClick={()=>{dispatch(increment())}} style={{padding:"5px 10px"}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        </div>
    );
}

export default FuncComponent;