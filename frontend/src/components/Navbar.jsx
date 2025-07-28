import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"
import axios from "axios"
// import { URL } from "../utils/config"

const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  const showMenu=()=>{
    setMenu(!menu)
  }
  
  const {user, setUser} = useContext(UserContext)
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/api/auth/logout", {withCredentials:true})
      setUser(null)
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="relative">
    {/*
      setUser(null)
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }
    
  return (
    <div className="relative">
      {/* Main navbar container */}
      <div className="bg-gradient-to-r from-purple-900 via-pink-800 to-indigo-900 border-b-4 border-black shadow-[0_8px_0px_0px_#000000] relative overflow-hidden">
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-20 w-8 h-8 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-4 right-32 w-6 h-6 bg-pink-400 rounded-full"></div>
          <div className="absolute bottom-2 left-1/3 w-4 h-4 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-3 right-20 w-5 h-5 bg-green-400 rounded-full"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-between px-6 md:px-[200px] py-6">
          
          {/* Logo/Brand */}
          <div className="group">
            <Link to="/">
              <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-4 rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                <h1 className="text-white font-black text-lg md:text-2xl uppercase tracking-wider flex items-center">
                  <span className="mr-2">🚀</span>
                  Blog Market
                  <span className="ml-2">✨</span>
                </h1>
              </div>
            </Link>
          </div>
          
          {/* Search bar - only on home page */}
          {path==="/" && (
            <div className="hidden md:flex items-center bg-white rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000000] overflow-hidden">
              <div className="flex items-center px-4 py-3">
                <input 
                  onChange={(e)=>setPrompt(e.target.value)} 
                  className="outline-none px-3 py-1 text-gray-800 font-medium placeholder-gray-500 bg-transparent min-w-[200px]" 
                  placeholder="Search awesome posts..." 
                  type="text"
                />
                <button 
                  onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 ml-2"
                >
                  <BsSearch className="text-white text-lg"/>
                </button>
              </div>
            </div>
          )}
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {/* Write button for logged in users */}
                <Link to="/write" className="group">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-500 hover:from-green-500 hover:to-cyan-600 px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                    <span className="text-white font-bold uppercase tracking-wide flex items-center">
                      <span className="mr-2">✍️</span>
                      Write
                    </span>
                  </div>
                </Link>
                {/* Profile button */}
                <Link to={`/profile/${user._id}`} className="group">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                    <span className="text-white font-bold uppercase tracking-wide flex items-center">
                      <span className="mr-2">👤</span>
                      Profile
                    </span>
                  </div>
                </Link>
                {/* Logout button */}
                <button onClick={handleLogout} className="group">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                    <span className="text-white font-bold uppercase tracking-wide flex items-center">
                      <span className="mr-2">🚪</span>
                      Logout
                    </span>
                  </div>
                </button>
              </>
            ) : (
              <>
                {/* Login button for guests */}
                <Link to="/login" className="group">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                    <span className="text-white font-bold uppercase tracking-wide flex items-center">
                      <span className="mr-2">🔑</span>
                      Login
                    </span>
                  </div>
                </Link>
                
                {/* Register button for guests */}
                <Link to="/register" className="group">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                    <span className="text-white font-bold uppercase tracking-wide flex items-center">
                      <span className="mr-2">✨</span>
                      Register
                    </span>
                  </div>
                </Link>
              </>
            )}
          </div>
          
         
          
        </div>
        
        {/* Mobile search bar */}
        
        
        {/* Bottom decorative gradient strip */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 via-purple-400 to-cyan-400"></div>
      </div>
    </div>
  )
}

export default Navbar