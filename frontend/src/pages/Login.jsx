import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      setLoading(true)
      setError(false)
      
      const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true })
      setUser(res.data)
      navigate("/")

    } catch (err) {
      setError(true)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-gradient-to-r from-purple-100 via-pink-100 to-cyan-100 border-b-4 border-black">
        <h1 className="text-lg md:text-xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          <Link to="/" className="hover:scale-105 transition-transform duration-200 inline-block">
            🚀 Blog Market
          </Link>
        </h1>
        <Link 
          to="/register" 
          className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-white font-bold text-sm uppercase"
        >
          ✨ Register
        </Link>
      </div>

      {/* Main Content */}
      <div className="min-h-[80vh] bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 flex justify-center items-center p-6">
        <div className="relative max-w-md w-full">
          {/* Login container */}
          <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] p-8">
            
            {/* Decorative corner elements */}
            <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black animate-pulse"></div>
            <div className="absolute top-3 left-3 w-3 h-3 bg-pink-400 rounded-full border-2 border-black animate-pulse" style={{animationDelay: '0.5s'}}></div>
            
            {/* Login content */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-black text-gray-800 mb-2">Welcome Back! 🎉</h1>
              <p className="text-gray-600 text-sm">Log in to your awesome blog account</p>
            </div>
            
            <div className="space-y-4">
              {/* Email field */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">📧 Email Address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full px-4 py-3 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] focus:shadow-[2px_2px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200 bg-white font-medium placeholder-gray-500"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              
              {/* Password field */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">🔒 Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full px-4 py-3 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] focus:shadow-[2px_2px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200 bg-white font-medium placeholder-gray-500"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              
              {/* Login button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className={`w-full py-3 px-6 rounded-xl border-3 border-black font-black text-white text-lg uppercase transition-all duration-200 ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  '🚀 Log In'
                )}
              </button>
              
              {/* Error message */}
              {error && (
                <div className="text-red-600 font-bold text-center mb-4">தவறான email அல்லது password!</div>
              )}
              
              {/* Register link */}
              <div className="text-center pt-4 border-t-2 border-gray-300">
                <div className="flex justify-center items-center space-x-2">
                  <p className="text-gray-600 font-medium">New here?</p>
                  <Link 
                    to="/register" 
                    className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 text-white font-bold text-xs uppercase"
                  >
                    🌟 Register Now
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Bottom decorative strip */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 via-purple-400 to-cyan-400 rounded-b-xl"></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000000] animate-bounce"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000000] animate-bounce" style={{animationDelay: '0.3s'}}></div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login