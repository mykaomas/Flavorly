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
            <a id = "profilebtn" href="http://localhost:3000/profile">Profile</a>
            <div>
                {Auth.loggedIn() ? (
                    <a id = "logoutbtn" onClick={logout}>Logout</a>
                ) : (
                    <>
                    <Link to ="/login">Login</Link>
                    </>
                 )}
            
            </div>
            
        </div>
    );
};

export default Header;