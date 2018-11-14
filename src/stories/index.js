import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import ToDo from '../ToDo'
import Input from '../Input'
import ProgressBar from '../ProgressBar'
import Separator from '../Separator'
import ToggleButton from '../ToggleButton'

storiesOf('ToDo', module).add('all states', () => (
  <React.Fragment>
    <ToDo
      done={boolean('Done?', false)}
      text={text('Your text here:', 'short task')}
      onToggle={action('onToggle')}
      onDelete={action('onDelete')}
    />
    <ToDo
      done={boolean('Is this done?', false)}
      text={text(
        'Your longer text here:',
        'this is a longer task that takes up more space and will eventually wrap if you shrink the window far enough'
      )}
      onToggle={action('onToggle')}
      onDelete={action('onDelete')}
    />
    <ToDo
      done={boolean('And this?', true)}
      text={text('Your done task here:', 'this is done')}
      onToggle={action('onToggle')}
      onDelete={action('onDelete')}
    />
  </React.Fragment>
))

storiesOf('Input', module).add('Input', () => (
  <Input
    onSubmit={action('addInputToArray')}
    placeholder={text('Your placeholder here:', 'Breathe and smile :)')}
    name={text('Your input name here:', 'task-input')}
    label={text('Your label here:', 'What do you want to keep in mind?')}
  />
))

storiesOf('ProgressBar', module).add('several states', () => (
  <React.Fragment>
    <ProgressBar width={number('Progress:', 0, progBarOptions)} />
    <ProgressBar width="0.33" />
    <ProgressBar width="0.66" />
    <ProgressBar width="1" />
  </React.Fragment>
))

const progBarOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.01
}

storiesOf('Separator', module).add('several states', () => (
  <React.Fragment>
    <Separator text={text('Your text here:', 'to do')} />
    <Separator text="done" />
  </React.Fragment>
))

storiesOf('ToggleButton', module).add('both states', () => (
  <React.Fragment>
    <ToggleButton
      defaultText={text('Your default text here:', 'hide done tasks')}
      alternativeText={text('Your alternative text here:', 'show done tasks')}
      hideDoneTasks={action('toggleText')}
      initialDefault={boolean('Is this toggled?', false)}
    />
    <ToggleButton
      defaultText="hide done tasks"
      alternativeText="show done tasks"
      hideDoneTasks={action('toggleText')}
      initialDefault={true}
    />
  </React.Fragment>
))
