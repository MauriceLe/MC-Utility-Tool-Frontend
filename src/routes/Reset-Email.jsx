import logo from '../assets/logo.svg'
import * as React from 'react'
import '../styles/Auth.css'


function ResetEmail() {

    const [state, setState] = React.useState({
        email: ''
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state.email);
    }

    return (
    <div class="container">
        <form class="form" onSubmit={handleSubmit}>
            <div class="title-container">
                <img src={logo} width="40px" height="40px"/>
                <h1 class="title">MC Utility Tool</h1>
            </div>
            
            <span class="subtitle">Reset password</span>
            
            <input 
                name='email'
                value={state.email}
                onChange={handleChange}
                class="input" 
                placeholder="E-Mail" 
                type="email" 
                required
            />
            
            <button type="submit" class="button">Confirm</button>

            <a class="link" href="#/login">Back to login</a>
        </form> 
    </div>
    )
}
  
export default ResetEmail