import React from 'react';
import './App.css';
import hamburger from "./images/hamburger.png"
import settings from "./images/settings.png"
import addButton from "./images/add.png"
import editButton from "./images/edit.png"


class App extends React.Component {
  state = {
    todos: [
      {
        description: "Wake Up",
        completed: false
      },
      {
        description: "Brush Hair",
        completed: false
      },
      {
        description: "Brush Teeth",
        completed: false
      },
      {
        description: "Leave for School",
        completed: false
      }
    ],
    newTodoDesc: ''
  }
  newTodo = e => {
    this.setState({ newTodoDesc: e.target.value })
  }
  addTodo = () => {
    let todos = this.state.todos
    todos.push({
      description: this.state.newTodoDesc,
      completed: false
    })
    this.setState({ todos: todos, newTodoDesc: '' })
    //console.log('hello')`
  }
  render() {
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
          {/* new input with text box and button */}
          <div className="addInput">
            <input
              type="text"
              value={this.state.newTodoDesc}
              onChange={this.newTodo}
              onKeyDown={(e) => e.key === 'Enter' ? this.addTodo() : ''}
            />
            <button onClick={this.addTodo} >Enter</button>
          </div>
          <div className="listBox">
            <ul className="listItems">
              {this.state.todos.map((todo, index) => (
                <li key={index}>
                  <input type="checkbox"
                    defaultChecked={todo.completed}
                  />
                  {todo.description}
                </li>
              ))
              }
            </ul>
          </div>
        </div>
        <footer>
          <div className="addButtonElements">
            <img src={addButton} id="add" alt="add"></img>
            <h3>Add</h3>
          </div>
          <div className="editButtonElements">
            <img src={editButton} id="edit" alt="edit"></img>
            <h3>Edit</h3>
          </div>
        </footer>
      </div >
    )
  }
}

export default App
