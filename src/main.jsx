import React from 'react'
import ReactDOM from 'react-dom/client'

// libraries
import { BrowserRouter } from 'react-router-dom'

// components
import App from './App'

// others
import 'bootstrap/dist/css/bootstrap.min.css'
import '@adminkit/core/dist/css/app.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
