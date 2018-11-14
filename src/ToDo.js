import React, { Component } from 'react'
import styled from 'styled-components'
import { turquoise, darkblue } from './colors'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75em;
  margin-bottom: 0.75em;

  .done {
    text-decoration: line-through;
  }
`

const Button = styled.button`
  width: 1.2em;
  height: 1.2em;
  font-size: 22px;
  border: none;
  color: ${darkblue};
  border-radius: 50%;
  background: ${turquoise};
  text-align: center;
  vertical-align: center;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px #a6fde5;
  }
`

export default class ToDo extends Component {
  render() {
    const { text, onToggle, onDelete, done } = this.props

    return (
      <Wrapper>
        <span className={done ? 'done' : ''} onClick={onToggle}>
          {text}
        </span>
        <Button onClick={onDelete}>&times;</Button>
      </Wrapper>
    )
  }
}
