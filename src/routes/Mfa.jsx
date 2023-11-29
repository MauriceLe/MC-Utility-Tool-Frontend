import logo from '../assets/logo.svg'
import * as React from 'react'
import '../styles/Auth.css'


function Mfa() {

    const [state, setState] = React.useState({
        token: ''
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state.token);
    }

    return (
    <div class="container">
        <form class="form" onSubmit={handleSubmit}>
            <div class="title-container">
                <img src={logo} width="40px" height="40px"/>
                <h1 class="title">MC Utility Tool</h1>
            </div>
            
            <span class="subtitle">Mulifactor Authorization</span>
            
            <input
                name="token"
                value={state.token}
                onChange={handleChange} 
                class="input" 
                placeholder="Access-Token" 
                type="text" 
                required
            />
            
            <button type="submit" class="button">Confirm</button>

            <a class="link" href="#/login">Back to login</a>
        </form> 
    </div>
    )
}
  
export default Mfa