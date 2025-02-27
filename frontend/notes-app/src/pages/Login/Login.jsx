import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/helper'



const Login = () => {

  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) =>{
    e.preventDefault();
    if (!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!Password){
      setError("Please enter the password")
      return;
    }

    setError("")

    //Login api call
  }


  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded-3xl bg-gray-900 px-7 py-10'>

          {/*------- Form -------*/}
          <form onSubmit={handleLogin}>

            <h4 className='text-2xl mb-7'>Login</h4>

              <input
              type="text"
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e) => setemail(e.target.value)}
              />

          {/*------- Password input -------*/}
              <PasswordInput
              value={Password}
              onChange={(e)=> setPassword(e.target.value)}
              />

              {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button type='submit' className='btn-primary'>
              Login
            </button>


            <p className='text-sm text-center mt-4'>
              not registered yet?   {" "}
              <Link to='/signUp' className='font-medium text-primary underline' >
                Create an Account
              </Link>
            </p>

          </form>

        </div>
      </div>
    </>
  )
}

export default Login
