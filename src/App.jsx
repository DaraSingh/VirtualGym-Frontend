import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import About from './pages/About'
import GeneratePlan from './pages/GeneratePlan'
import Workout from './pages/workout'
function App() {
  const [isloggedIn, setLogin] = useState(false);
  useEffect((e) => {
      const CheckAuth = async() => {
        const res=await fetch("http://localhost:3000/check_auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include"
        });
        const data=await res.json()
        // console.log(data.isLoggedIn)
        setLogin(data.isLoggedIn)
        console.log(isloggedIn)
        // setLogin(document.cookie.includes("token="))  // use this if not using httpOnly request (less Secure)
      };
      CheckAuth();
    }, [isloggedIn]);
  // const [userData,setUserData]=useState({});
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Navbar isloggedIn={isloggedIn}/> {/* Always visible */}
          <div className="p-4 bg-gradient-to-b from-black via-indigo-950 via-purple-900 to-black min-h-screen ">
            <Routes>
              <Route path="/" element={<Home isloggedIn={isloggedIn}/>} />
              <Route path="/login" element={<Login isloggedIn={isloggedIn}/>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About/>} />
              <Route path="/generatePlan" element={<GeneratePlan isloggedIn={isloggedIn}/>} />
              <Route path="/workout" element={<Workout isloggedIn={isloggedIn}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
