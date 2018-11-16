import React, { Component } from 'react'
import ToggleButton from './ToggleButton'

export default class Config extends Component {
  render() {
    return (
      <ToggleButton
        defaultText="hide done tasks"
        alternativeText="show done tasks"
        onClick={this.props.onClick}
        isDefault={this.props.showDoneTodos}
      />
    )
  }
}
