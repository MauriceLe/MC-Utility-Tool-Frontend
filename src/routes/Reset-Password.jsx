import logo from '../assets/logo.svg'
import '../styles/Auth.css'


function ResetPassword() {
  return (
    <div class="container">
        <form class="form">
            <div class="title-container">
                <img src={logo} width="40px" height="40px"/>
                <h1 class="title">MC Utility Tool</h1>
            </div>
            
            <span class="subtitle">Confirm password</span>
            
            <input class="input" placeholder="New Password" type="email" required/>
            
            <input class="input" placeholder="Repeat Password" type="email" required/>
            
            <button class="button" type="submit">Confirm</button>
            
            <a class="link" href="#/login">Back to login</a>
        </form> 
    </div>
  )
}
  
export default ResetPassword