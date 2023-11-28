import Login from './routes/Login'
import Reset from './routes/Reset'
import Mfa from './routes/Mfa'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path = "/MC-Utility-Tool-Frontend/" element = {<Login />} />
      <Route path = "/MC-Utility-Tool-Frontend/reset" element = {<Reset />} />
      <Route path = "/MC-Utility-Tool-Frontend/mfa" element = {<Mfa />} />
    </Routes>
  )
}

export default App
