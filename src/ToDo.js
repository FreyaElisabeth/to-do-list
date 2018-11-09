import React, { Component } from 'react'
import './ToDo.css'

export default class ToDo extends Component {
  render() {
    const { text, onClick } = this.props

    return (
      <li className="ToDo" onClick={onClick}>
        {text}
      </li>
    )
  }
}
