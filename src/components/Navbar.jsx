import { useEffect, useState } from "react";
import React from "react";
import logo from "../assets/Logo.svg"
function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log(props);
  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogOut = async(e) => {
    e.preventDefault()
    const res=await fetch("https://virtualgym-backend.onrender.com/logout",{
      method:"get",
      headers:{
        "Content-Type":"application/json"
      },
      credentials:"include"
    })
    const data=await res.json();
    alert(data.message)
    window.location.reload();
  };
  // An array of navigation items to make the component easily scalable
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-black shadow-lg text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          <img src={logo} alt="MyBrand" width="60" height="60" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-gray-300 py-2"
            >
              {item.name}
            </a>
          ))}
          {props.isloggedIn ? (
            <a
              href="/"
              onClick={handleLogOut}
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold px-4 py-2 rounded-full"
            >
              LogOut
            </a>
          ) : (
            <a
              href="/Login"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 font-bold px-4 py-2 rounded-full"
            >
              Login
            </a>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-center rounded-md text-2xl"
          >
            {isMenuOpen ? "X" : " ⠇ "}
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
            {props.isloggedIn ? (
              <a
                href="/"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 font-bold px-4 py-2 rounded-full"
                onClick={handleLogOut}
              >
                LogOut
              </a>
            ) : (
              <a
                href="/Login"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 font-bold px-4 py-2 rounded-full"
                onClick={toggleMenu}
              >
                Login
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
