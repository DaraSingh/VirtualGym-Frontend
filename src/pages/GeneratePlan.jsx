import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GeneratePlan(props) {
    const [genStatus,setGenStatus]=useState(false);
  const [userData, setUserData] = useState({
    // name:"",
    // age:"",
    // weight:"",
    // height:"",
    // otherInfo:""
  });
  const navigate=useNavigate()
  useEffect(() => {
    const GenUser = async () => {
      const res = await fetch("http://localhost:3000/GeneratePlan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        age: data.age,
        weight: data.weight,
        height: data.height,
        otherInfo: data.otherInfo,
      });
      console.log(userData);
    };
    GenUser();
  }, []);
  if(!props.isloggedIn){
    return (<div className="text-white" >Please Login First</div>)
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const Proceed=window.confirm("Your Previous Plan And Details will be erase,Are You Sure You want to proceed");
    if(Proceed){
        setGenStatus(true)
        const res=await fetch("http://localhost:3000/generate",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(userData),
            credentials:"include"

        })
        const data=await res.json();
        setGenStatus(false)
        console.log("Plan is Being Generated")
        if(res.ok){
            alert(data.message)
            navigate("/")
            
        }
        else {
            alert(data.message)
        }
        
        // console.log(data)
    }
  };
  const handleChange = (e) => {
    const name=e.target.name;
    const value=e.target.value
    setUserData({
        ...userData,
        [name]:value
    })
    // console.log(e.target)
  };
  return (
    
    <div className="container mx-auto p-4 flex flex-col items-center justify-center text-gray-400">
    {!genStatus?
      <div className="bg-gradient-to-b bg-gradient-to-br from-purple-900 via-black to-purple-900 p-8 md:p-12 rounded-lg shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Generate New Plan
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="mb-2" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            id="name"
            onChange={handleChange}
            className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black"
            type="text"
            value={userData.name}
            placeholder=""
          />

          <label className="mb-2" htmlFor="age">
            Age
          </label>
          <input
            name="age"
            id="age"
            onChange={handleChange}
            className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black"
            type="Number"
            value={userData.age}
            placeholder=""
          />

          <label className="mb-2" htmlFor="weight">
            Weight(in Kg)
          </label>
          <input
            name="weight"
            id="weight"
            onChange={handleChange}
            className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black"
            type="Number"
            value={userData.weight}
            placeholder=""
          />

          <label className="mb-2" htmlFor="height">
            Height(in feet)
          </label>
          <input
            name="height"
            id="height"
            onChange={handleChange}
            className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black"
            type="Number"
            value={userData.height}
            placeholder=""
          />

          <label className="mb-2" htmlFor="otherInfo">
            Anything else You want to Share
          </label>
          <textarea
            name="otherInfo"
            id="otherInfo"
            onChange={handleChange}
            className="border w-full text-xl rounded-md p-2 focus:outline-none focus:border-fuchsia-500 focus:text-gray-200 bg-black"
            type="text"
            value={userData.otherInfo}
            placeholder=""
          />
          <div className="p-5 text-center">
            <button
              type="submit"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-8 rounded-full shadow-lg"
            >
              Generate Plan
            </button>
          </div>
        </form>
      </div>
      :<div className="text-green-400 text-2xl font-bold">Please Wait For Few Moments Your Plan is Getting Ready</div>
    }
    </div>
);
}

export default GeneratePlan;
