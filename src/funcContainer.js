import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import FuncPresentation from './funcPresentation';

function FuncComponent() {
    const count = useSelector(state =>state.counter);
    const dispatch = useDispatch();
    
    return (
        <FuncPresentation 
            counter={count} 
            increment={()=>{dispatch(increment())}} 
            decrement={()=>{dispatch(decrement())}}
        />
    );
}

export default FuncComponent;