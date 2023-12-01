import { Routes, Route } from "react-router-dom"
import ResetConfirm from './routes/Reset-Confirm'
import Reset from './routes/Reset'
import Login from './routes/Login'
import Mfa from './routes/Mfa'


function App() {
  return (
    <Routes>
      <Route path="/login" element = {<Login />} />
      <Route path="/mfa" element = {<Mfa />} />
      <Route path="/reset" element = {<Reset />} />
      <Route path="/reset-confirm" element = {<ResetConfirm />} />
    </Routes>
  )
}


export default App
