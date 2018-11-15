import React, { Component } from 'react'
import uid from 'uid'
import styled from 'styled-components'

import Input from './Input'
import ToDo from './ToDo'
import Separator from './Separator'
import ProgressBar from './ProgressBar'

export const Wrapper = styled.div`
  background: #151d36;
  color: #a6fde5;
  font-size: 22px;
  min-height: 100vh;
  padding: 1em;
`

export default class App extends Component {
  state = {
    todos: this.loadArray()
  }

  render() {
    this.save()
    return (
      <Wrapper>
        <Input
          name="task-input"
          label="What do you want to keep in mind?"
          placeholder="Breathe and smile :)"
          onSubmit={event => this.addInputToArray(event)}
        />
        <ProgressBar width={this.determineProgress()} />
        <Separator text="to do" />
        {this.renderOpenToDos()}
        <Separator text="done" />
        {this.renderDoneToDos()}
      </Wrapper>
    )
  }

  determineProgress() {
    const { todos } = this.state
    return todos.filter(todo => todo.done).length / todos.length
  }

  hideDoneTasks() {
    console.log('I hide tasks')
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
