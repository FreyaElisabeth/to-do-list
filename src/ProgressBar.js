import React, { Component } from 'react'
import styled from 'styled-components'
import { turquoise } from './colors'

const Wrapper = styled.div`
  border: 1px solid ${turquoise};
  border-radius: 9px;
`
const Progress = styled.div`
  background: ${turquoise};
  border-radius: 9px;
  height: 18px;
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
