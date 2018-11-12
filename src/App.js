import React, { Component } from 'react'
import uid from 'uid'
import './App.css'

import Input from './Input'
import ToDo from './ToDo'
import Separator from './Separator'

export default class App extends Component {
  state = {
    todos: this.loadArray()
  }

  render() {
    this.save()
    return (
      <div className="App">
        <Input onSubmit={event => this.onEnter(event)} />
        <Separator text="to do" />
        {this.renderOpenToDos()}
        <Separator text="done" />
        {this.renderDoneToDos()}
      </div>
    )
  }

  onEnter = event => {
    if (event.key === 'Enter') {
      this.addInputToArray(event)
      event.target.value = ''
    }
  }

  renderOpenToDos() {
    return this.state.todos
      .filter(todo => !todo.done)
      .map(this.renderSingleToDo)
  }

  renderDoneToDos() {
    return this.state.todos.filter(todo => todo.done).map(this.renderSingleToDo)
  }

  renderSingleToDo = todo => {
    return (
      <ToDo
        key={todo.id}
        text={todo.text}
        done={todo.done}
        onToggle={() => this.updateArray(todo.id)}
        onDelete={() => this.deleteTodoItem(todo.id)}
      />
    )
  }

  addInputToArray = event => {
    this.setState({
      todos: [
        { text: event.target.value, done: false, id: uid() },
        ...this.state.todos
      ]
    })
  }

  updateArray = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const todo = todos[index]
    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todo, done: !todo.done },
        ...todos.slice(index + 1)
      ]
    })
  }

  deleteTodoItem = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
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
