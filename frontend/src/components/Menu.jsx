import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { Link, useNavigate } from "react-router-dom"

const Menu = () => {
const {user}=useContext(UserContext)
const {setUser}=useContext(UserContext)
const navigate=useNavigate()

const handleLogout=async()=>{
  try{
    const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
    setUser(null)
    navigate("/login")
  }
  catch(err){
    console.log(err)
  }
}

  return (
    <div className="absolute top-16 right-6 md:right-32 z-50 animate-slideIn">
      {/* Main menu container */}
      <div className="bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-6 min-w-[220px] relative overflow-hidden">
        
        {/* Decorative background elements */}
        <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-pink-400 rounded-full border-2 border-black"></div>
        <div className="absolute top-1/2 left-1 w-2 h-2 bg-cyan-400 rounded-full border border-black"></div>
        
        {/* Menu title */}
        <div className="mb-4 pb-3 border-b-2 border-dashed border-white/30">
          <h2 className="text-white font-black text-lg uppercase tracking-wider flex items-center">
            <span className="text-yellow-400 mr-2">⚡</span>
            Menu
            <span className="text-pink-400 ml-2">✨</span>
          </h2>
        </div>
        
        {/* Menu items container */}
        <div className="space-y-3">
          
          {/* Guest menu items */}
          {!user && (
            <>
              <Link to="/login" className="block group">
                <div className="bg-gradient-to-r from-green-400 to-cyan-500 hover:from-green-500 hover:to-cyan-600 p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  <span className="text-white font-bold uppercase tracking-wide flex items-center">
                    <span className="mr-2">🔑</span>
                    Login
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </div>
              </Link>
              
              <Link to="/register" className="block group">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  <span className="text-white font-bold uppercase tracking-wide flex items-center">
                    <span className="mr-2">✨</span>
                    Register
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </div>
              </Link>
            </>
          )}
          
          {/* User menu items */}
          {user && (
            <>
              {/* User greeting */}
              <div className="bg-white/10 border-2 border-white/20 rounded-lg p-3 mb-4">
                <p className="text-white font-bold text-sm">
                  <span className="text-yellow-400">👋</span> Hey, {user.username}!
                </p>
              </div>
              
              <Link to="/write" className="block group">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  <span className="text-white font-bold uppercase tracking-wide flex items-center">
                    <span className="mr-2">✍️</span>
                    Write
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </div>
              </Link>
              
              <Link to={`/myblogs/${user._id}`} className="block group">
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  <span className="text-white font-bold uppercase tracking-wide flex items-center">
                    <span className="mr-2">📚</span>
                    My Blogs
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </div>
              </Link>
            </>
          )}
        </div>
        
        {/* Bottom decorative strip */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400"></div>
      </div>
      
      {/* Triangle pointer */}
      <div className="absolute -top-2 right-8 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-black"></div>
      <div className="absolute -top-1 right-8 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-purple-900"></div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Menu