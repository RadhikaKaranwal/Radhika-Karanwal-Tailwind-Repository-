import React from 'react'

function Register() {
  return (
    <div>
        <div>
            <div className='flex items-center justify-center flex-col gap-y-5'/>
     
       <input type='text' placeholder='Enter your Name' className='bg-white text-black px-5 py-5'/>
     
       <input type="email"placeholder='Enter your Email' className='bg-white text-black px-5 py-5'  />
     
       <button type='submit' className='bg-white text-black px-3 py-2'>Register</button>
        </div>
    </div>
  )
}

export default Register