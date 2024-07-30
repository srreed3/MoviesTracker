import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import View from './View.jsx'
import Add from './Add.jsx'
import Movies from './Movies.jsx'
import BaseLayout from './BaseLayout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route path = "/" element = { <Home />}/>
        <Route path = "/view" element = { <View />}/>
        <Route path = "/add" element = { <Add />}/>
        <Route path = "/movies" element = { <Movies />}/>

      </Routes>
    </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
