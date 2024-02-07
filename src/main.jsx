import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Route for local version */}
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}

    {/* Route for deployed version */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
