import logo from './assets/logo.svg'
import logoutIcon from './assets/logout-icon.svg'
import profileIcon from './assets/profile-icon.svg'


function Navbar() {
  return (
    <div class="navbar">

        <div class="logo-box">
            <img src={logo} width="20px" height="20px"/>
            <h1 class="logo-title">Marketing Cloud Utility Tool</h1>
        </div>

        <div class="menu">

            <div class="business">
                <select>
                    <option>Dr. Oetker Global</option>
                    <option>Alsa</option>
                    <option>Bakken.nl</option>
                    <option>Chicago Town</option>
                    <option>Dr. Oetker Pizza & Baking</option>
                    <option>Mavalerio</option>
                    <option>Koopmans</option>
                    <option>Training & Tests</option>
                    <option>Wilton</option>
                </select>
            </div>

            <div class="profile">
                <img src={profileIcon} class="icon" />
                <span class="profile-title">Max Mustermann</span>
                <button class="icon-button">
                    <img src={logoutIcon} width="17px" height="15px"/> 
                    Logout
                </button>
            </div>

        </div>

    </div>
  )
}
  
export default Navbar