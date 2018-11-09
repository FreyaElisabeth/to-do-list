import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import ToDo from './ToDo'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <ul className="listContainer">
          <ToDo />
        </ul>
      </div>
    )
  }
}
