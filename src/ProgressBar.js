import React, { Component } from 'react'
import styled from 'styled-components'
import { turquoise } from './colors'

const Wrapper = styled.div`
  border: 1px solid ${turquoise};
  border-radius: 9px;
  margin: 0.75em 0;
  overflow: hidden;
`
const Progress = styled.div`
  background: ${turquoise};
  border-radius: 0 8px 8px 0;
  height: 18px;
  transition: width 0.5s ease;
  width: ${props => props.width}%;
`

export default class ProgressBar extends Component {
  render() {
    return (
      <Wrapper>
        <Progress width={this.props.width * 100} />
      </Wrapper>
    )
  }
}

//auch als styled.div mit zus. Element &::after möglich
