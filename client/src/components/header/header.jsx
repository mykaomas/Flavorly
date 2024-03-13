import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

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
                    <><Link id="logoutbtn" onClick={logout}>Logout</Link><Link id="profilebtn" to="/Profile">Profile</Link></>
                ) : (
                    <>
                    <Link to ="/login">Login</Link>
                    <Link to ="/Signup">Signup</Link>
                    </>
                 )}
            
            </div>
            
        </div>
    );
};

export default Header;