import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import Header from "../components/header/header"
import '../pagescss/login.css';

import Auth from '../utils/auth'

const Login = (props) => {
  console.log(props)
    const [userState, setUserState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setUserState({
        ...userState,
        [name]: value,
      });
    };
  
    // submit form
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(userState);
      try {
        const { data } = await login({
          variables: { ...userState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
        alert("Invalid Username or Password, Please Try Again.")
      }
  
      // clear form values
      setUserState({
        email: '',
        password: '',
      });
    };

    return (
      
        <div> 
        <Header></Header>
            <div className="bg-secondary vh-100 formDiv" >
                <form className="p-3 rounded w-25 loginForm" onSubmit={handleSubmit}>
                  <h2>Please Login</h2>
                  
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email:</strong>
                        </label>
                        <input 
                        type="text" 
                        placeholder='Enter Email' 
                        autoComplete='off' 
                        name='email' 
                        // type="email"
                        value={userState.email}
                        onChange={handleChange}
    
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password:</strong>
                        </label>
                        <input type="password" 
                        placeholder='Enter Password' 
                        name='password' 
                        // type='password'
                        className='form-control rounded-0'
                        value={userState.password} 
                        onChange={handleChange}
    
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    </form>
            </div>
        </div>
      );
    }
    
    export default Login;
