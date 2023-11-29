import logo from '../assets/logo.svg'
import '../styles/Auth.css'


function Mfa() {
  return (
    <div class="container">
        <form class="form">
            <div class="title-container">
                <img src={logo} width="40px" height="40px"/>
                <h1 class="title">MC Utility Tool</h1>
            </div>
            
            <span class="subtitle">Mulifactor Authorization</span>
            
            <input class="input" placeholder="Access Token" type="text" required/>
            
            <button class="button">Confirm</button>

            <a class="link" href="#/login">Back to login</a>
        </form> 
    </div>
  )
}
  
export default Mfa