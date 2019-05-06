import React from 'react';
import './App.css';
import hamburger from "./images/hamburger.png"
import settings from "./images/settings.png"
import addButton from "./images/add.png"
import editButton from "./images/edit.png"

let todos = [
  {
    id: 1,
    description: "Wake Up",
    completed: false
  },
  {
    id: 2,
    description: "Brush Hair",
    completed: false
  },
  {
    id: 3,
    description: "Brush Teeth",
    completed: false
  },
  {
    id: 4,
    description: "Leave for School",
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
                <input type="checkbox" class="largerCheckbox" defaultChecked={todo.completed} />
                <p>{todo.description}</p>
              </li>
            ))
            }
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
