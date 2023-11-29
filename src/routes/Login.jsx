import logo from '../assets/logo.svg'
import * as React from 'react'
import '../styles/Auth.css'


function Login() {

    const [state, setState] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(state.email, state.password)
    }

    return (
    <div class="container">
        <form class="form">
            <div class="title-container">
                <img src={logo} width="40px" height="40px"/>
                <h1 class="title">MC Utility Tool</h1>
            </div>

            <span class="subtitle">Login</span>
            
            <input
                name='email'
                value={state.email}
                onChange={handleChange}
                class="input" 
                placeholder="E-Mail" 
                type="email" 
                required
            />
            
            <input
                name='password'
                value={state.password}
                onChange={handleChange}
                class="input" 
                placeholder="Password" 
                type="password" 
                required
            />
            
            <button type="submit" class="button">Login</button>
            
            <a class="link" href="#/reset">Forgot password? Click here</a>
        </form>
    </div>
    )
}
  

export default Login