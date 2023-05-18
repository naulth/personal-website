import React from 'react'
import {Routes, Route} from "react-router-dom"

import Home from "./Home"
import Nav from "./Nav"
import About from "./About"
import Resume from "./Resume"

function App() {
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About /> } />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    </div>
  )
}

export default App;
