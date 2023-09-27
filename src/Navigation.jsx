import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'

function Navigation() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 
        <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  )
}

export default Navigation