import React, { Component } from 'react'
import styled from 'styled-components'

const WrapperSeparator = styled.section`
  display: flex;
  align-items: center;

  .hr {
    width: 100%;
    margin: 0.75em 0;
    border-bottom: 1px solid #a6fde5;
  }

  span {
    white-space: nowrap;
    padding: 0 1em;
  }
`

export default class Separator extends Component {
  render() {
    return (
      <WrapperSeparator>
        <div className="hr" />
        <span>{this.props.text}</span>
        <div className="hr" />
      </WrapperSeparator>
    )
  }
}
