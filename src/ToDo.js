import React, { Component } from 'react'
import './ToDo.css'

export default class ToDo extends Component {
  render() {
    const { text, onClick, className } = this.props

    return (
      <li className={className} onClick={onClick}>
        {text}
      </li>
    )
  }
}
