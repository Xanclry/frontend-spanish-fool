import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/app/app'
import { Router } from 'react-router'
import { history } from './config'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
