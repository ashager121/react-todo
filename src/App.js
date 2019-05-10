import React from 'react';
import './App.css';
import styled from 'styled-components';
import Todo from './Todo';
import Header from './Header';
import Footer from './Footer';

const Thetitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Unordered = styled.ul`
  list-style: none;
  padding: 30px;
  margin: 0 auto;
  border-bottom: gray;
`
const Theboxofjoy = styled.input`
  padding: 15px;
  background-color: gray;
  font-size: 1.125rem;
  color: white;
  font-style: bold;
`
const Thebutton = styled.button`
  padding: 15px;
  background-color: lightgreen;
  font-size: 1.125rem;
`

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
          <Thetitle>To Do</Thetitle>
          {/* new input with text box and button */}
          <div className="addInput">
            <Theboxofjoy
              type="text"
              value={this.state.newTodoDesc}
              onChange={this.newTodo}
              onKeyDown={(e) => e.key === 'Enter' ? this.addTodo() : ''}
            />
            <Thebutton onClick={this.addTodo} >Enter</Thebutton>
          </div>
          <div className="listBox">
            <Unordered>
              {this.state.todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
              ))
              }
            </Unordered>
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}

export default App
