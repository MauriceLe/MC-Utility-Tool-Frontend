import logo from './assets/logo.svg'
import './styles/Auth.css'


function Login() {
  return (
    <div class="container">
        <form class="form">
            <div class="title-box">
                <img src={logo} width="40px" height="40px"/>
                <h1 class="title">MC Utility Tool</h1>
            </div>
            <span class="subtitle">Login</span>
            <input class="input" placeholder="E-Mail" type="email" required/>
            <input class="input" placeholder="Password" type="password" required/>
            <button class="button">Login</button>
            <a class="link" href="#/reset">
                Forgot password? Click here
            </a>
        </form> 
    </div>
  )
}
  

export default Login