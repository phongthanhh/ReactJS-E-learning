import { createBrowserHistory } from 'history'
import React from 'react'
import { Router } from 'react-router'
import AppRoutes from 'routes'
import { Toast } from 'components'
import { GlobalStyles } from 'assets/style/globalStyles'

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Toast />
      <GlobalStyles />
      <AppRoutes />
    </Router>
  )
}

export default App
