import React, { Component } from 'react'
import styled from 'styled-components'
import { turquoise, darkblue } from './colors'

const Button = styled.button`
  background: ${turquoise};
  border-radius: 5px;
  border: none;
  color: ${darkblue};
  font-size: 22px;
  font-size: 22px;
  height: 1.2em;
  margin: 0.75em;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px #a6fde5;
  }
`

export default class ToggleButton extends Component {
  state = {
    isDefault:
      this.props.initialDefault == null ? true : this.props.initialDefault
  }

  render() {
    const { defaultText, alternativeText } = this.props
    const { isDefault } = this.state

    return (
      <Button onClick={this.toggleText}>
        {isDefault ? defaultText : alternativeText}
      </Button>
    )
  }

  toggleText = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.hideDoneTasks()
  }
}
