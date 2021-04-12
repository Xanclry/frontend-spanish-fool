import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/app/app'
import { Router } from 'react-router'
import { history } from './config'
import { Provider } from 'react-redux'
import store from './state'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
