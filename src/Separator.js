import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  margin: 0.75em 0;
  border-bottom: ${props => props.thickness || 4}px solid #a6fde5;
`

const Text = styled.span`
  white-space: nowrap;
  padding: 0 1em;
`

export default class Separator extends Component {
  render() {
    return (
      <Wrapper>
        <Line thickness={1} />
        <Text>{this.props.text}</Text>
        <Line thickness={1} />
      </Wrapper>
    )
  }
}
