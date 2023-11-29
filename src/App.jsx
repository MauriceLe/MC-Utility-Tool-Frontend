import { Routes, Route } from "react-router-dom"
import Login from './routes/Login'
import Reset from './routes/Reset'
import Mfa from './routes/Mfa'


function App() {
  return (
    <Routes>
      <Route path="/login" element = {<Login />} />
      <Route path="/reset" element = {<Reset />} />
      <Route path="/mfa" element = {<Mfa />} />
    </Routes>
  )
}


export default App
