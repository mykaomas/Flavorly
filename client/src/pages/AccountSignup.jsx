import { useState } from "react"

import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

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
  
      setFormState({
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
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
            <h2><center>Sign Up</center></h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" 
                        placeholder='Enter Name' 
                        autoComplete='off' 
                        name='email' 
                        className='form-control rounded-0'
                        value={ userState.name }
                        onChange={ handleChange }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text" 
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
                            <strong>Password</strong>
                        </label>
                        <input type="password" 
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