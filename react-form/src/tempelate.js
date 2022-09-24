import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setState] = useState(" ");
  const [fullname, nameState] = useState();
  
  const inputEvent = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  const onsubmit = () =>{
    nameState(name);
  }

  return (
    <>
      <h1>Hello {fullname}</h1>
      <input type='text' placeholder='Enter your name' onChange={inputEvent} value = {name}></input>
      <button onClick={onsubmit}>Click Me 👍</button>
    </>
  );
}

export default App;