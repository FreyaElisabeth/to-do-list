import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import ToDo from './ToDo'
import DeleteBtn from './DeleteBtn'

export default class App extends Component {
  state = {
    todos: this.loadFromLocalStorage()
  }

  addInputToArray = event => {
    const newTodos = [
      { text: event.target.value, done: false },
      ...this.state.todos
    ]
    this.setState({ todos: newTodos })
  }

  deleteTodoItem = (index, arr) => {
    const newTodos = [...arr.slice(0, index), ...arr.slice(index + 1)]
    this.setState({ todos: newTodos })
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.addInputToArray(event)
      event.target.value = ''
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

  saveToLocalStorage() {
    console.log('saved to localStorage')
    localStorage.setItem('to-do list', JSON.stringify(this.state.todos))
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('to-do list'))
  }

  render() {
    this.saveToLocalStorage()

    return (
      <div className="App">
        <Input onSubmit={event => this.onEnter(event)} />
        <ul className="listContainer">
          {this.state.todos.map((todo, index, arr) => (
            <div key={`listItem${index}`} className="listItem">
              <ToDo
                key={`todo${index}`}
                text={todo.text}
                className={this.state.todos[index].done ? 'ToDo done' : 'ToDo'}
                onClick={() => this.updateTodosArray(index, arr)}
              />
              <DeleteBtn
                key={`btn${index}`}
                onClick={() => {
                  this.deleteTodoItem(index, arr)
                  this.saveToLocalStorage()
                }}
              />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}
