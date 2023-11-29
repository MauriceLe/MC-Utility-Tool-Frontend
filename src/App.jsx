import { Routes, Route } from "react-router-dom"
import ResetPassword from './routes/Reset-Password'
import ResetEmail from './routes/Reset-Email'
import Login from './routes/Login'
import Mfa from './routes/Mfa'


function App() {
  return (
    <Routes>
      <Route path="/login" element = {<Login />} />
      <Route path="/reset-email" element = {<ResetEmail />} />
      <Route path="/reset-password" element = {<ResetPassword />} />
      <Route path="/mfa" element = {<Mfa />} />
    </Routes>
  )
}


export default App
