import { Button } from "@mui/material";

function FuncPresentation(props) {
    return ( 
        <div>
            <h1>{props.counter}</h1>
            <Button variant='contained' sx={{mx:2}} onClick={props.increment}>+</Button>
            <Button variant='contained' sx={{mx:2}} onClick={props.decrement}>-</Button>
        </div>
     );
}

export default FuncPresentation;