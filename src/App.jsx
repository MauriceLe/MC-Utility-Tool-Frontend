import { Routes, Route } from "react-router-dom"
import Login from './routes/Login'
import Reset from './routes/Reset'
import Mfa from './routes/Mfa'
import React from 'react'
import './App.css'


function App() {
  return (
    <Routes>
      <Route path="/" element = {<Login />} />
      <Route path="/reset" element = {<Reset />} />
      <Route path="/mfa" element = {<Mfa />} />
    </Routes>
  )
}


export default App
