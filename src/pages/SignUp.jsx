import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response=await fetch("https://virtualgym-backend.onrender.com/register",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(formData),
    })
    const data=await response.json()
    // console.log(data)
    if(data) alert(data.message)
    navigate('/login')
    // console.log("Success:",data)
    }catch(err){
        console.log("Error: ",err)
    } 
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(formData)
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-gray-400">
      <div className="bg-gradient-to-b bg-gradient-to-br from-purple-900 via-black to-purple-900 p-8 md:p-12 rounded-lg shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="pb-4 mb-2">
            <label className="mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              onChange={handleChange}
              className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="pb-4 mb-2">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black"
              type="email"
              placeholder="you@your.com"
              required
            />
          </div>
          <div className="pb-4 mb-2">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              name="password"
              id="password"
              onChange={handleChange}
              className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black"
              type="password"
              placeholder="••••••••"
              minLength={8}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-fuchsia-600 text-lg hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
            >
              Register
            </button>
          </div>
        </form>
        <div className="py-2 px-4 text-center">
        <a href="login" >already have an account?</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
