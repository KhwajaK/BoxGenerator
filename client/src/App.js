import './App.css';
import React, {useState} from 'react';
import FormBox from './components/FormBox';
import DisplayBox from './components/DisplayBox';

function App() {
  const [ colorArray, setColorArray] = useState([]);
// this is the parent, colorArray is getter, setColorArray is setter. 
  return (
    <div className="App">
      <FormBox colorArray={ colorArray } setColorArray={ setColorArray} />
      <DisplayBox colorArray={ colorArray }/>
    </div>
  );
}

export default App;
