import Login from './routes/Login'
import Reset from './routes/Reset'
import Mfa from './routes/Mfa'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Login />} />
      <Route path = "/reset" element = {<Reset />} />
      <Route path = "/mfa" element = {<Mfa />} />
    </Routes>
  )
}

export default App
