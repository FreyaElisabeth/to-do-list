import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../src/GlobalStyle'
import { Wrapper } from '../src/App'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(story => (
  <Wrapper>
    <GlobalStyle />
    {story()}
  </Wrapper>
))

addDecorator(withKnobs)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
