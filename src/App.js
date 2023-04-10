import { Button } from '@mui/material';
import './App.css';
import ClassComponent from './classContainer';
import FuncComponent from './funcContainer';
import store from './store';
import { reset } from './actions';

function App() {
  return (
    <div className="App">
      <h1 style={{margin:"0",padding:"20px"}}>function Component</h1>
      <FuncComponent/>
      <hr/>
      <h1>Class Component</h1>
      <ClassComponent time="now"/>
      <hr/>
      <Button variant='outlined' onClick={()=>store.dispatch(reset())}>Reset</Button>
    </div>
  );
}

export default App;
