import { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Navbar /> {/* Always visible */}
          <div className="p-4 bg-gradient-to-b from-black to-slate-900 min-h-screen ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
