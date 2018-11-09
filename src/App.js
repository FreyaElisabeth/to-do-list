import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import ToDo from './ToDo'

export default class App extends Component {
  state = {
    todos: [
      { text: 'Create', done: false },
      { text: 'Eat', done: false },
      { text: 'Sleep', done: false },
      { text: 'Repeat', done: false }
    ]
  }

  updateTodosArray = (index, arr) => {
    const newTodos = [
      ...arr.slice(0, index),
      { ...arr[index], done: !this.state.todos[index].done },
      ...arr.slice(index + 1)
    ]
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div className="App">
        <Input />
        <ul className="listContainer">
          {this.state.todos.map((todo, index, arr) => (
            <ToDo
              key={index}
              text={todo.text}
              onClick={() => this.updateTodosArray(index, arr)}
            />
          ))}
        </ul>
      </div>
    )
  }
}
