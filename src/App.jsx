import { useState } from 'react'
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
  const [userData,setUserData]=useState({});
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Navbar isloggedIn={isloggedIn} setLogin={setLogin}/> {/* Always visible */}
          <div className="p-4 bg-gradient-to-b from-black to-slate-900 min-h-screen ">
            <Routes>
              <Route path="/" element={<Home isloggedIn={isloggedIn}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/generatePlan" element={<GeneratePlan/>} />
              <Route path="/workout" element={<Workout/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
