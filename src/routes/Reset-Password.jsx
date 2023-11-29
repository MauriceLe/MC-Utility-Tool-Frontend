import logo from '../assets/logo.svg'
import * as React from 'react'
import '../styles/Auth.css'


function ResetPassword() {

    const [state, setState] = React.useState({
        password: '',
        repeated: ''
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state.password);
    }

    return (
    <div class="container">
        <form class="form" onSubmit={handleSubmit}>
            <div class="title-container">
                <img src={logo} width="40px" height="40px"/>
                <h1 class="title">MC Utility Tool</h1>
            </div>
            
            <span class="subtitle">Confirm password</span>
            
            <input
                name='password'
                value={state.password}
                onChange={handleChange}
                class="input" 
                placeholder="New Password" 
                type="email" 
                required
            />
            
            <input
                name='repeated'
                value={state.repeated}
                onChange={handleChange}
                class="input" 
                placeholder="Repeat Password" 
                type="email" 
                required
            />
            
            <button type="submit" class="button">Confirm</button>
            
            <a class="link" href="#/login">Back to login</a>
        </form> 
    </div>
    )
}
  
export default ResetPassword