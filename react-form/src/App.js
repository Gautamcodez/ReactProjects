import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [fullname, setFullName] = useState({
    fname : '',
    lname : '',
  });

  // const [name, setState] = useState(" ");
  // const [lastName, setLastName] = useState(" ");
  // const [fullname, nameState] = useState();
  // const [lastNamef, setLastNamef] = useState(" ");
  
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) =>  {
      console.log(preValue);
      // if (name === 'fname'){
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //   };
      // } else {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //   };
      // }
      return{
        ...preValue,
        [name]:value,
      }
    })
  };

  const onsubmit = (event) =>{
    event.preventDefault();
    // nameState(name);
    // setLastNamef(lastName);
    alert('form submitted');
  }

  return (
    <>
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <form onSubmit = {onsubmit}>
      <input type='text' placeholder='Enter your First name' onChange={inputEvent} name = 'fname' value = {fullname.fname}></input>
      <input type='text' placeholder='Enter your Last name' onChange={inputEvent} name = 'lname' value = {fullname.lname}></input>
      <input type='email' placeholder='Enter your email' onChange={inputEvent} name = 'email' value = {fullname.email}></input>
      <input type='number' placeholder='Enter your phone no.' onChange={inputEvent} name = 'phone' value = {fullname.phone}></input>
      <button onClick={onsubmit}>Click Me 👍</button>
      </form> 
    </>
  );
}

export default App;
