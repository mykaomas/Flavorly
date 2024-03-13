import { useState } from "react"

import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth'
import Header from "../components/header/header"
import '../pagescss/signup.css';

const Signup = () => {
    const [userState, setUserState] = useState({
      name: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
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
        const { data } = await addUser({
          variables: { ...userState },
        });
        console.log(data)
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
        alert("User Already Registered, Please Login.")
      }
    };

    return (
    
        <div className>
          <Header></Header>
            <div className="bg-secondary vh-100 rounded-0 signupDiv">
                <form className="p-3 rounded w-25 signupForm" onSubmit={handleSubmit}>
                <h2 classname="h2Signup">Sign Up</h2>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name:</strong>
                        </label>
                        <input 
                        type="text" 
                        placeholder='Enter Name' 
                        autoComplete='off' 
                        name='name' 
                        className='form-control rounded-0'
                        value={ userState.name }
                        onChange={ handleChange }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email:</strong>
                        </label>
                        <input 
                        type="text" 
                        placeholder='Enter Email' 
                        autoComplete='off' 
                        name='email' 
                        className='form-control rounded-0'
                        value={ userState.email }
                        onChange={ handleChange }

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password:</strong>
                        </label>
                        <input 
                        type="password" 
                        placeholder='Enter Password' 
                        name='password' 
                        className='form-control rounded-0'
                        value = { userState.password } 
                        onChange={ handleChange }

                        />
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-success w-100 rounded-0"
                    style={{ cursor: 'pointer' }}
                    >
                        Sign Up
                    </button>
                    </form>
            </div>
        </div>
    );
}


export default Signup;