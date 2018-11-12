import React, { Component } from 'react'
import './ToDo.css'

export default class ToDo extends Component {
  render() {
    const { text, onToggle, onDelete, done } = this.props

    return (
      <div className="ToDo">
        <span className={done ? 'done' : ''} onClick={onToggle}>
          {text}
        </span>
        <button className="deleteBtn" onClick={onDelete}>
          &times;
        </button>
      </div>
    )
  }
}
