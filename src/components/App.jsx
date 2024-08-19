import React, { useState } from "react";

function App() {

  const [inputText, setInputText]= useState("");
  const [items,setItems]= useState([]);

  function handleInput(event){
    const newValue= event.target.value;
    setInputText(newValue);
  }
  function add(){
    setItems(prevItems => [...prevItems, inputText]);
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" 
          onChange={handleInput}
          value={inputText}
        />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item)=>
          {
            return (<li>{item}</li>);
          }
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
