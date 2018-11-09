import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import ToDo from './ToDo'

export default class App extends Component {
  todos = [
    { text: 'Create', done: false },
    { text: 'Eat', done: false },
    { text: 'Sleep', done: false },
    { text: 'Repeat', done: false }
  ]

  render() {
    return (
      <div className="App">
        <Input />
        <ul className="listContainer">
          {this.todos.map(todo => (
            <ToDo text={todo.text} onClick={() => console.log(todo.text)} />
          ))}
        </ul>
      </div>
    )
  }
}
