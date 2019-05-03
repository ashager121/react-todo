import React from 'react';
import './App.css';
import hamburger from "./images/hamburger.png"
import settings from "./images/settings.png"
import addButton from "./images/add.png"
import editButton from "./images/edit.png"

let todos = [{
  id: 1,
  description: "your description",
  completed: false
},
{
  id: 2,
  description: "your description",
  completed: true
},
{
  id: 3,
  description: "your description",
  completed: false
}
]

function App() {
  return (
    //className App runs the whole thing
    <div className="App">
      <div className="header">
        <img src={hamburger} id="hamburger" alt="hamburger"></img>
        <h1>
          ToDo App
        </h1>
        <img src={settings} id="settings" alt="settings"></img>
      </div>
      <div className="toDoList">
        <h1>To Do</h1>
        <div class="listBox">
          <ul className="listItems">
            {todos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.completed} />
                {todo.description}
              </li>
            ))
            }
          </ul>
        </div>
        <div class="listBox">
          <ul className="listItems">
            <input type="checkbox"></input><li>Brush Hair</li>
          </ul>
        </div>
        <div class="listBox">
          <ul className="listItems">
            <input type="checkbox"></input><li>Brush Teeth</li>
          </ul>
        </div>
        <div class="listBox">
          <ul className="listItems">
            <input type="checkbox"></input><li>Eat Breakfast</li>
          </ul>
        </div>
      </div>
      <footer>
        <div class="addButtonElements">
          <img src={addButton} id="add" alt="add"></img>
          <h3>Add</h3>
        </div>
        <div class="editButtonElements">
          <img src={editButton} id="edit" alt="edit"></img>
          <h3>Edit</h3>
        </div>
      </footer>
    </div>
  )
}

export default App;
