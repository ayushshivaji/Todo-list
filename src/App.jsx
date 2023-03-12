import { useState } from 'react'
import Todo from './components/todo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {

  const [todos, setTodos] = useState(["Laundry","Homework","Cooking"]);
  let isChecked = false;

  const buttonOnClick = () => {
    let newTodo = document.querySelector("#new-todo");
    if (newTodo.value != ""){
      setTodos([newTodo.value,...todos]);
    }
    newTodo.value = "";
    // console.log(newTodo);
  }

  const buttonOnClickClearDone = () => {
    let checkedTodos = Array.from(document.querySelectorAll(".checked"));
    const newState = checkedTodos.map((checkedItem) => {
      let selectedDiv = document.querySelector(".div-"+checkedItem.id);
      let elementId = todos.indexOf(checkedItem.id.slice(5,));
      console.log(elementId);
      todos.splice(elementId,1);
      setTodos([...todos]);
    })
  }

  const buttonOnClickClearAll = () => {
    setTodos([]);
  }

  const onCheck = (e) => {
    let templabel = "label[id="+e.target.id+"]";
    const label = document.querySelectorAll(templabel);

    if(label[0].classList.contains("checked")){
      label[0].classList.remove("checked");
    }
    else{
    label[0].classList.add("checked");
    }
    isChecked = !isChecked;
  }

  let todoList = todos.map((todo) => <Todo key={todo} onChange={onCheck} value={todo}/>);

  return (
    <div className="App">
      <div className='App-container'>
        <div className='heading h3'>
         <p>Todos App</p>
        </div>
        {todoList}
        <input type="Text" placeholder='Enter a new todo here' id="new-todo"></input>
        <div className="buttons-container">
          <button id="submit-button" onClick={buttonOnClick}>Submit</button>
          <button id="clear-done-button" onClick={buttonOnClickClearDone}>Clear Done</button>
          <button id="clear-all-button" onClick={buttonOnClickClearAll}>Clear All</button>
        </div>
      </div>
    </div> 
  )
}

export default App
