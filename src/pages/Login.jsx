import {React , useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Login(props) {
    const navigate=useNavigate()
    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch("https://virtualgym-backend.onrender.com/login",{
            method:"Post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(loginData),
            credentials:'include'
        })
        if(response.ok){
            const data=await response.json()
            // props.setLogin(true)
            // console.log(props.isloggedIn)
            alert(data.message)
            navigate("/")
            window.location.reload();
        }else{
            const data=await response.json()
            alert(data.message)
        }
        
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setLoginData({
            ...loginData,
            [name]:value
        })
        // console.log(loginData)
    }
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-gray-400">
      <div className="bg-gradient-to-b bg-gradient-to-br from-purple-900 via-black to-purple-900 p-8 md:p-12 rounded-lg shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl text-white font-bold text-center mb-6">Log In</h2>
        <form  onSubmit={handleSubmit}>
            <div className='pb-4 mb-2'>
                <label className='mb-2' htmlFor='email'>Email Address</label>
                <input name='email' id='email' onChange={handleChange} className='border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black' type="email" placeholder='you@your.com'/>
            </div>
            <div className='pb-4 mb-2'>
                <label className='mb-2' htmlFor='password'>Password</label>
                <input name="password" id='password' onChange={handleChange} className='border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black' type="password" placeholder="••••••••"/>
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
        <div className="py-2 px-4 text-center">
        <a href="signup" >don't have an account?</a>
        </div>
      </div>
    </div>
  )
}

export default Login
