import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/app/app'
import { Router } from 'react-router'
import { history } from './config'
import { Provider } from 'react-redux'
import store from './state'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
