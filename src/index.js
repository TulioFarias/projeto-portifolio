import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './containers/Home'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Home />
    <GlobalStyles />
  </>
)
