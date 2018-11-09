import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import ToDo from './ToDo'

export default class App extends Component {
  state = {
    todos: []
  }

  addInputToArray = event => {
    const newTodos = [
      { text: event.target.value, done: false },
      ...this.state.todos
    ]
    this.setState({ todos: newTodos })
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.addInputToArray(event)
    }
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
        <Input onSubmit={event => this.onEnter(event)} />
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
