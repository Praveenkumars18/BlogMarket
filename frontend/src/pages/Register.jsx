import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from 'axios'
import {URL} from '../url'

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const [success, setSuccess] = useState(false)
  const navigate=useNavigate()

  const handleRegister=async ()=>{
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      setUsername("")
      setEmail("")
      setPassword("")
      setError(false)
      setSuccess(true)
      setTimeout(()=>{
        navigate("/login")
      }, 1500)
    }
    catch(err){
      setError(true)
      setSuccess(false)
      console.log(err)
    }
  }

  return (
    <>
      {/* Header with retro styling */}
      <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 border-b-4 border-black shadow-[0px_8px_0px_0px_#000000]">
        <div className="flex items-center justify-between px-6 md:px-[200px] py-6 relative">
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-6 w-3 h-3 bg-cyan-400 rounded-full border-2 border-black"></div>
          <div className="absolute top-2 right-6 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
          
          <h1 className="text-xl md:text-2xl font-black text-white drop-shadow-[3px_3px_0px_#000000]">
            <Link to="/" className="hover:text-yellow-200 transition-colors duration-300">
              🚀 Blog Market
            </Link>
          </h1>
          
          <div className="bg-white px-4 py-2 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
            <Link to="/login" className="font-bold text-purple-800 hover:text-pink-600 transition-colors">
              Login ✨
            </Link>
          </div>
        </div>
      </div>

      {/* Main content with retro background */}
      <div className="min-h-[80vh] bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 flex justify-center items-center py-12 px-4 relative overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full border-4 border-black opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-400 rounded-full border-4 border-black opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-cyan-400 rounded-full border-4 border-black opacity-20 animate-pulse delay-500"></div>
        
        {/* Registration form container */}
        <div className="bg-gradient-to-br from-white via-yellow-50 to-pink-50 border-4 border-black rounded-3xl shadow-[20px_20px_0px_0px_#000000] hover:shadow-[15px_15px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 w-full max-w-md relative overflow-hidden">
          
          {/* Decorative header strip */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"></div>
          
          {/* Corner decorations */}
          <div className="absolute top-6 right-6 w-4 h-4 bg-purple-400 rounded-full border-2 border-black"></div>
          <div className="absolute top-6 left-6 w-3 h-3 bg-cyan-400 rounded-full border-2 border-black"></div>
          
          <div className="p-8 pt-12 space-y-6">
            
            {/* Title section */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_#000000] inline-block mb-4 transform -rotate-2">
                <h1 className="text-2xl font-black text-white drop-shadow-[2px_2px_0px_#000000]">
                  Create Account ✨
                </h1>
              </div>
              <p className="text-gray-600 font-semibold">Join our amazing community!</p>
            </div>

            {/* Form inputs */}
            <div className="space-y-5">
              
              {/* Username input */}
              <div className="relative">
                <div className="absolute -top-2 left-4 bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] z-10">
                  <span className="text-white font-bold text-xs">👤 USERNAME</span>
                </div>
                <input 
                  onChange={(e)=>setUsername(e.target.value)} 
                  className="w-full px-6 py-4 pt-6 border-3 border-black rounded-xl outline-0 font-semibold text-gray-800 bg-white shadow-[6px_6px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 focus:bg-yellow-50" 
                  type="text" 
                  placeholder="Enter your cool username" 
                />
              </div>

              {/* Email input */}
              <div className="relative">
                <div className="absolute -top-2 left-4 bg-gradient-to-r from-green-400 to-cyan-500 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] z-10">
                  <span className="text-white font-bold text-xs">📧 EMAIL</span>
                </div>
                <input 
                  onChange={(e)=>setEmail(e.target.value)} 
                  className="w-full px-6 py-4 pt-6 border-3 border-black rounded-xl outline-0 font-semibold text-gray-800 bg-white shadow-[6px_6px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 focus:bg-yellow-50" 
                  type="email" 
                  placeholder="your.email@awesome.com" 
                />
              </div>

              {/* Password input */}
              <div className="relative">
                <div className="absolute -top-2 left-4 bg-gradient-to-r from-pink-400 to-purple-500 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] z-10">
                  <span className="text-white font-bold text-xs">🔒 PASSWORD</span>
                </div>
                <input 
                  onChange={(e)=>setPassword(e.target.value)} 
                  className="w-full px-6 py-4 pt-6 border-3 border-black rounded-xl outline-0 font-semibold text-gray-800 bg-white shadow-[6px_6px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 focus:bg-yellow-50" 
                  type="password" 
                  placeholder="Super secret password" 
                />
              </div>
            </div>

            {/* Register button */}
            <button 
              onClick={handleRegister} 
              className="w-full px-6 py-5 text-xl font-black text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl border-3 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-2 hover:translate-y-2 transition-all duration-300 transform hover:scale-105"
            >
              🚀 CREATE ACCOUNT
            </button>

            {/* Error message with retro styling */}
            {error && (
              <div className="bg-gradient-to-r from-red-400 to-pink-400 border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_#000000] animate-pulse">
                <h3 className="text-white font-bold text-center drop-shadow-[2px_2px_0px_#000000]">
                  ⚠️ Oops! Something went wrong. Please try again.
                </h3>
              </div>
            )}

            {/* Success message */}
            {success && (
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_#000000] animate-bounce">
                <h3 className="text-white font-bold text-center drop-shadow-[2px_2px_0px_#000000]">
                  🎉 Registered successfully!
                </h3>
              </div>
            )}

            {/* Login link */}
            <div className="bg-gradient-to-r from-yellow-100 to-pink-100 border-2 border-black rounded-xl p-4 text-center shadow-[4px_4px_0px_0px_#000000]">
              <div className="flex justify-center items-center space-x-3">
                <p className="font-semibold text-gray-700">Already have an account?</p>
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
                  <Link to="/login" className="text-white font-bold hover:text-yellow-200 transition-colors">
                    Login Here! 🎯
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative strip */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Register