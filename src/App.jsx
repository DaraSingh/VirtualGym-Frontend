import { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Navbar /> {/* Always visible */}
          <div className="p-4 bg-gray-900 h-screen ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
