import React from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';
import Footer from './Footer';


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
        <Header />
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
                <Todo key={index} todo={todo} />
              ))
              }
            </ul>
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}

export default App
