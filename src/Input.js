import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
  render() {
    return (
      <label htmlFor="input">
        What do you want to remember?
        <input
          type="text"
          name="input"
          placeholder="Take a break"
          className="Input"
        />
      </label>
    )
  }
}
