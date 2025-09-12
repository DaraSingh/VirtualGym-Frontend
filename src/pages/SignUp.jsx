import { React, useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response=await fetch("http://localhost:3000/api/register",{
        method:"Post",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(formData)
    })
    const data=await response.json()
    console.log("Success:",data)
    }catch(err){
        console.log("Error: ",err)
    }

    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData)
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-gray-500">
      <div className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="pb-4 mb-2">
            <label className="mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="fullname"
              onChange={handleChange}
              className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-gray-600"
              type="text"
              placeholder="Your Name"
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
              className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-gray-600"
              type="email"
              placeholder="you@your.com"
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
              className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-gray-600"
              type="password"
              placeholder="••••••••"
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
      </div>
    </div>
  );
}

export default SignUp;
