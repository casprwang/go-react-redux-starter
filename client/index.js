import React from 'react'
import { render } from 'react-dom'

// router and redux thing
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

// components
import App from './components/App.jsx'

render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Route path="/" component={ App } />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
