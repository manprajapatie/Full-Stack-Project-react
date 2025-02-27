import React, { useState } from 'react'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6"

const PasswordInput = ({value, onChange, placeholder}) => {

    const [IsShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!IsShowPassword);
    }

  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded-2xl mb-3'>
      <input 
      value={value}
      onChange={onChange}
      type={IsShowPassword ? 'text' : 'password'}
      placeholder={placeholder || 'Password'}
      className='w-full text-sm bg-transparent py-3 mr-3 rounded-2xl outline-none'
       />

    {IsShowPassword ?(

            <FaRegEye
            size={22}        
            className='text-blue-900 cursor-pointer'
            onClick={() => toggleShowPassword()}
        />
    ) : (
        <FaRegEyeSlash
        size={22}        
        className='text-grey cursor-pointer'
        onClick={() => toggleShowPassword()}
    />
    )
    }
    </div>
  )
}

export default PasswordInput
