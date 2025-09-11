import { useState } from "react";
import React from 'react'

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [loggedIn,setLogin]=useState(false);
  const isLogIn = () =>{
    if(document.cookie.includes('session_token=')) setLogin(true);
    else setLogin(false)
  }
  // An array of navigation items to make the component easily scalable
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <a href="#" className="text-2xl font-bold tracking-tight">
          MyBrand
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-gray-300 py-2">
              {item.name}
            </a>
          ))}
          {document.cookie.includes("token=")?<a href="/" onClick={handleLogOut} className="bg-blue-500 hover:bg-blue-600 font-bold px-4 py-2 rounded-full">LogOut</a>:
            <a href="/Login" className="bg-blue-500 hover:bg-blue-600 font-bold px-4 py-2 rounded-full">Login</a>
          }
    
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-center rounded-md">
           {isMenuOpen?"X":" ⠇ "}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (toggled by state) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700 transition-colors duration-200"
                onClick={toggleMenu} // Close menu on item click
              >
                {item.name}
              </a>
            ))}
            {document.cookie.includes("token=")?<a href="" className="bg-blue-500 hover:bg-blue-600 font-bold px-4 py-2 rounded-full" onClick={toggleMenu}>LogOut</a>:
            <a href="/Login" className="bg-blue-500 hover:bg-blue-600 font-bold px-4 py-2 rounded-full" onClick={toggleMenu} >Login</a>
            }
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
