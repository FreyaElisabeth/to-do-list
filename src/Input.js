import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
  render() {
    return (
      <label htmlFor="input">
        What do you want to keep in mind?
        <input
          name="input"
          placeholder="Breathe and smile :)"
          className="Input"
          onKeyUp={this.props.onSubmit}
        />
      </label>
    )
  }
}
