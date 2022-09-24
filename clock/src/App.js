import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const setime = useState();
  let newTime = new Date().toLocaleTimeString();
  const [Ctime, Nexttime] = useState(newTime);

  const Updatetime = () =>{
    let newTime = new Date().toLocaleTimeString();
    Nexttime(newTime);
  }

  setInterval(Updatetime,
    1000);

  return (
    <>
      <h1>{Ctime}</h1>
      {/* <button onClick={Updatetime}>Click me!</button> */}
    </>
  );
}

export default App;
