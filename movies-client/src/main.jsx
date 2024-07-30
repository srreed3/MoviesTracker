import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Movies from './Movies.jsx'
import BaseLayout from './BaseLayout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route path = "/" element = { <App />}/>
        <Route path = "/movies" element = { <Movies />}/>
      </Routes>
    </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
