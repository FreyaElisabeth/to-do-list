import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { turquoise, darkblue } from './colors'

import Home from './Home'
import Config from './Config'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  background: ${darkblue};
  color: ${turquoise};
  font-size: 22px;
  height: 100vh;
  padding: 1em;

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  a:any-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${darkblue};
    background: ${turquoise};
    width: 100%;

    &.active {
      color: white;
    }
  }
`

export default class App extends Component {
  state = { showDoneTodos: true }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route
            path="/"
            exact
            render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
          />
          <Route
            path="/config/"
            render={() => (
              <Config
                onClick={this.toggleShowDoneTodos}
                showDoneTodos={this.state.showDoneTodos}
              />
            )}
          />
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/config/">Config</NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }

  toggleShowDoneTodos = () => {
    this.setState({ showDoneTodos: !this.state.showDoneTodos })
  }
}
