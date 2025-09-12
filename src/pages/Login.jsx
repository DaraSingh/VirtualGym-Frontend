import React from 'react'

function Login() {
    const handleSubmit=()=>{

    }
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-gray-500">
      <div className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-2xl w-full max-w-sm">

        <h2 className="text-3xl text-white font-bold text-center mb-6">Log In</h2>
        <form  onSubmit={handleSubmit}>
            <div className='pb-4 mb-2'>
                <h1 className='mb-2'>Email Address</h1>
                <input className='border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-gray-600' type="text" placeholder='you@your.com'/>
            </div>
            <div className='pb-4 mb-2'>
                <h1 className='mb-2'>Password</h1>
                <input className='border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-gray-600' type="password" placeholder="••••••••"/>
            </div>
            <div className='p-5 text-center'>
            <button
            type='submit'
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-full shadow-lg"
          >
            Login
          </button>
            </div>
            
        </form>
        
      </div>
    </div>
  )
}

export default Login
