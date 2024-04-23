import { useState } from 'react';
import './App.css';

function App() {
  //let counter=5;

  const [counter,setCounter] =useState(5)

  const addValue=()=>{
    //console.log('value added');
    if(counter<20){
      //setCounter(counter+1);
      setCounter(prevCounter => prevCounter+1)  //add on previous counter
    }
    
    
  }

  const removeValue=()=>{
    //console.log('value decreased');
    if(counter>0){
      setCounter(counter-1);
    }
    
    
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value counter={counter+1}</button>
      <br/>
      <br/>
      <button onClick={removeValue}> Decrease value counter={counter-1}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
