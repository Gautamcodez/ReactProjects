import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {

  const [inputList, setInputList] = useState(" ");
  const [items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('')
  }

  const deleteItems = (id)=>{
    // console.log("item Deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
      return index !== id;
    });
    });
};

  return (
    <>
      <div className='main_div'>
      <div className='center_div'>
      <br/>
      <h1>ToDO List</h1>
      <br />
      <input type= 'text' placeholder='Add items' onChange={itemEvent} value={inputList} />
      <button onClick={listOfItems}>+</button>

      <ol>
        {items.map((itemval, index)=>{
          return <ToDoList 
          key = {index}
          id={index}
          text={itemval} 
          onSelect = {deleteItems}
          />;
        })}
      </ol>

      </div>

      </div>
    </>
  );
}

export default App;
