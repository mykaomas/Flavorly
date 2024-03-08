import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";

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
      }
  
      // clear form values
      setUserState({
        email: '',
        password: '',
      });
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2><center>Login</center></h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
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
                            <strong>Password</strong>
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
