import React, { Component } from 'react'
import './DeleteBtn.css'

export default class DeleteBtn extends Component {
  render() {
    const { onClick } = this.props

    return <button onClick={onClick}>&times;</button>
  }
}
