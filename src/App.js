import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import ToDo from './ToDo'
import DeleteBtn from './DeleteBtn'

export default class App extends Component {
  state = {
    todos: this.loadArray()
  }

  render() {
    this.save()
    return (
      <div className="App">
        <Input onSubmit={event => this.onEnter(event)} />
        <ul className="listContainer">{this.renderToDos()}</ul>
      </div>
    )
  }

  renderToDos() {
    return this.state.todos.map((todo, index, arr) => (
      <div key={`listItem${index}`} className="listItem">
        <ToDo
          key={`todo${index}`}
          text={todo.text}
          className={this.state.todos[index].done ? 'ToDo done' : 'ToDo'}
          onClick={() => this.updateArray(index, arr)}
        />
        <DeleteBtn
          key={`btn${index}`}
          onClick={() => {
            this.deleteTodoItem(index, arr)
            this.save()
          }}
        />
      </div>
    ))
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.addInputToArray(event)
      event.target.value = ''
    }
  }

  addInputToArray = event => {
    const newTodos = [
      { text: event.target.value, done: false },
      ...this.state.todos
    ]
    this.setState({ todos: newTodos })
  }

  updateArray = (index, arr) => {
    this.setState({
      todos: [
        ...arr.slice(0, index),
        { ...arr[index], done: !this.state.todos[index].done },
        ...arr.slice(index + 1)
      ]
    })
  }

  deleteTodoItem = (index, arr) => {
    this.setState({ todos: [...arr.slice(0, index), ...arr.slice(index + 1)] })
  }

  loadArray() {
    try {
      return JSON.parse(localStorage.getItem('to-do list')) || []
    } catch (err) {
      return []
    }
  }

  save() {
    localStorage.setItem('to-do list', JSON.stringify(this.state.todos))
  }
}
