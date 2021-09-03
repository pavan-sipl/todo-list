import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import TodoList from './TodoList';

function App() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] =useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const listOfItems = () =>{

    setItems((oldItems)=>{
      return [...oldItems, inputList]
    });
    setInputList("");

  }

  const deleteItem =(id) =>{
    console.log("Deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index ==! id
      })
    })
}

  return (
    <div className="App">
     <div className="main">
       <h1>To Do List</h1>
       <div>
       <input value={inputList} placeholder="Enter Your Task" onChange={itemEvent} type="text"></input>
       <button onClick={listOfItems} > Add </button>
       </div>

       <div className="tasks">
         <h2>Tasks</h2>
         <ol>
           {items.map((tasks, index)=>{
            return <TodoList key={index} id={index} text={tasks}
            onSelect={deleteItem} />
           })}
         </ol>

       </div>

     </div>
    </div>
  );
}

export default App;
