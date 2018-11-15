import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../src/components/GlobalStyle'
import { Wrapper } from '../src/components/App'
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
