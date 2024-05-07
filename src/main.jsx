import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/styles.scss';
import './assets/icon-fonts/style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/big-dev-soon-blog'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
