import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Home.jsx'
import View from './View.jsx'
import Add from './Add.jsx'
import Movies from './Movies.jsx'
import Allmovies from './Allmovies.jsx'
import AE from './AE.jsx'
import FJ from './FJ.jsx'
import KO from './KO.jsx'
import PT from './PT.jsx'
import UZ from './UZ.jsx'
import Other from './Other.jsx'

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
        <Route path = "/allmovies" element = { <Allmovies />}/>
        <Route path = "/ae" element = { <AE />}/>
        <Route path = "/fj" element = { <FJ />}/>
        <Route path = "/ko" element = { <KO />}/>
        <Route path = "/pt" element = { <PT />}/>
        <Route path = "/uz" element = { <UZ />}/>
        <Route path = "/other" element = { <Other />}/>

      </Routes>
    </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
