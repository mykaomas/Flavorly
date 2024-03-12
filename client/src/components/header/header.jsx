import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'

const Header = () => {
    const logout = (event) => {
        event.preventDefault()
        Auth.logout()
    }
    
    return (
        <div id = "header">
            <img id = "headerImage" src="https://st5.depositphotos.com/6489488/68184/v/1600/depositphotos_681849440-stock-illustration-cute-cartoon-panda-eating-soup.jpg"></img>
            <h1>Flavorly</h1>
            <div>
                {Auth.loggedIn() ? (
                    <>
                        <Link id="logout-btn" onClick={logout}>Logout</Link>
                        <Link to ="/profile" id='profile-btn'>My Profile</Link>
                    </>
                ) : (
                    <>
                        <Link to ="/login" id='login-btn'>Login</Link>
                        <Link to ="/Signup" id='signup-btn'>Signup</Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header