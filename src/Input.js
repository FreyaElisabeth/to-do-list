import React, { Component } from 'react'
import styled from 'styled-components'

const InputField = styled.input`
  margin: 0.5em 0 1em 0;
  font-size: 22px;
  caret-color: #151d36;
  color: #151d36;
  width: 80vw;
  border: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px #a6fde5;
  }
`

export default class Input extends Component {
  render() {
    return (
      <label htmlFor="input">
        What do you want to keep in mind?
        <InputField
          name="input"
          placeholder="Breathe and smile :)"
          className="Input"
          onKeyUp={this.props.onSubmit}
        />
      </label>
    )
  }
}
