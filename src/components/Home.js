import React, { Component } from 'react'
import uid from 'uid'

import Input from './Input'
import ToDo from './ToDo'
import Separator from './Separator'
import ProgressBar from './ProgressBar'

export default class Home extends Component {
  state = {
    todos: this.loadArray()
  }

  render() {
    this.save()
    return (
      <div>
        <Input
          name="task-input"
          label="What do you want to keep in mind?"
          placeholder="Breathe and smile :)"
          onSubmit={event => this.addInputToArray(event)}
        />
        <ProgressBar width={this.determineProgress()} />
        {this.renderOpenToDos()}
        {this.props.showDoneTodos && this.renderDoneToDos()}
      </div>
    )
  }

  determineProgress() {
    const { todos } = this.state
    return todos.filter(todo => todo.done).length / todos.length
  }

  renderOpenToDos() {
    return (
      <React.Fragment>
        <Separator text="to do" />
        {this.state.todos.filter(todo => !todo.done).map(this.renderSingleToDo)}
      </React.Fragment>
    )
  }

  renderDoneToDos() {
    return (
      <React.Fragment>
        <Separator text="done" />
        {this.state.todos.filter(todo => todo.done).map(this.renderSingleToDo)}
      </React.Fragment>
    )
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
