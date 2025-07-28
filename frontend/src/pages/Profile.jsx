import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"
import axios from "axios"
import { IF, URL } from "../url"
import { UserContext } from "../context/UserContext"
import { useNavigate, useParams } from "react-router-dom"

const Profile = () => {
  const param = useParams().id
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [updated, setUpdated] = useState(false)

  const fetchProfile = async () => {
    try {
      const res = await axios.get(URL + "/api/users/" + user._id)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword("") // Do not prefill password
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleUserUpdate = async () => {
    setUpdated(false)
    try {
      const updateData = { username, email }
      if (password) updateData.password = password
      const res = await axios.put(URL + "/api/users/" + user._id, updateData, { withCredentials: true })
      setUpdated(true)
      setPassword("") // Clear password after update
      // Update user context if username/email changed
      setUser(prev => ({ ...prev, username, email }))
    }
    catch (err) {
      console.log(err)
      setUpdated(false)
    }
  }

  const handleUserDelete = async () => {
    try {
      const res = await axios.delete(URL + "/api/users/" + user._id, { withCredentials: true })
      setUser(null)
      navigate("/")
    }
    catch (err) {
      console.log(err)
    }
  }

  const fetchUserPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id)
      setPosts(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [param])

  useEffect(() => {
    fetchUserPosts()
  }, [param])

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      <Navbar />
      
      {/* Main Container */}
      <div className="min-h-[80vh] px-4 md:px-8 lg:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start gap-8">
        
        {/* Posts Section */}
        <div className="flex flex-col md:w-[70%] w-full">
          {/* Posts Header */}
          <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 rounded-2xl border-4 border-black shadow-[12px_12px_0px_0px_#000000] p-6 mb-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full border-2 border-black z-10"></div>
            <div className="absolute top-3 left-3 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black z-10"></div>
            <div className="absolute bottom-3 left-6 w-3 h-3 bg-green-400 rounded-full border-2 border-black z-10"></div>
            
            <h1 className="text-2xl md:text-3xl font-black text-white relative z-10 flex items-center gap-3">
              <span className="bg-black px-3 py-1 rounded-full text-lg">📝</span>
              Your Posts Collection
            </h1>
            <div className="w-32 h-1 bg-white rounded-full mt-3 relative z-10"></div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 right-8 text-6xl">✨</div>
              <div className="absolute bottom-8 right-16 text-4xl">🚀</div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="space-y-6">
            {posts?.length > 0 ? (
              posts.map((p) => (
                <ProfilePosts key={p._id} p={p} />
              ))
            ) : (
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-8 text-center">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-600 mb-2">No posts yet!</h3>
                <p className="text-gray-500">Start creating amazing content to see it here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Profile Section */}
        <div className="md:sticky md:top-12 md:w-[30%] w-full">
          <div className="bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] overflow-hidden relative">
            
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 relative">
              {/* Decorative elements */}
              <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
              <div className="absolute top-3 left-3 w-3 h-3 bg-cyan-400 rounded-full border-2 border-black"></div>
              
              {/* Profile Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_#000000] flex items-center justify-center">
                  <span className="text-2xl font-black text-white">
                    {username ? username.charAt(0).toUpperCase() : "U"}
                  </span>
                </div>
              </div>
              
              <h1 className="text-2xl font-black text-white text-center flex items-center justify-center gap-2">
                <span>👤</span>
                Profile Settings
              </h1>
              <div className="w-16 h-1 bg-white rounded-full mx-auto mt-2"></div>
            </div>

            {/* Form Section */}
            <div className="p-6 space-y-6">
              
              {/* Username Input */}
              <div className="group">
                <label className="block text-sm font-bold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 px-2 py-1 rounded-full text-white text-xs">@</span>
                  Username
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="w-full outline-none px-4 py-3 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] bg-white font-medium text-gray-700 focus:shadow-[2px_2px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200"
                    placeholder="Enter your username"
                    type="text"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400">✨</div>
                </div>
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-sm font-bold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 px-2 py-1 rounded-full text-white text-xs">📧</span>
                  Email
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full outline-none px-4 py-3 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] bg-white font-medium text-gray-700 focus:shadow-[2px_2px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400">💌</div>
                </div>
              </div>

              {/* Password Input */}
              <div className="group">
                <label className="block text-sm font-bold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 px-2 py-1 rounded-full text-white text-xs">🔒</span>
                  New Password
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="w-full outline-none px-4 py-3 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] bg-white font-medium text-gray-700 focus:shadow-[2px_2px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200"
                    placeholder="Enter new password (leave blank to keep current)"
                    type="password"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400">✨</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleUserUpdate}
                  className="flex-1 bg-gradient-to-r from-green-400 to-cyan-400 text-white font-black py-3 px-6 border-3 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span className="group-hover:rotate-12 transition-transform">💾</span>
                  Update Profile
                </button>
                
                <button
                  onClick={handleUserDelete}
                  className="flex-1 bg-gradient-to-r from-red-400 to-pink-400 text-white font-black py-3 px-6 border-3 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span className="group-hover:rotate-12 transition-transform">🗑️</span>
                  Delete Account
                </button>
              </div>

              {/* Success Message */}
              {updated && (
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] p-4 text-center animate-bounce">
                  <div className="flex items-center justify-center gap-2 text-white font-bold">
                    <span className="text-2xl">🎉</span>
                    Profile updated successfully!
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              )}

              {/* Stats Section */}
              <div className="bg-white border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] p-4 mt-6">
                <h3 className="font-black text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 px-2 py-1 rounded-full text-white text-xs">📊</span>
                  Your Stats
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-yellow-200 to-orange-200 border-2 border-black rounded-lg p-3 text-center">
                    <div className="text-2xl font-black text-gray-800">{posts?.length || 0}</div>
                    <div className="text-xs font-bold text-gray-600">Posts</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-200 to-purple-200 border-2 border-black rounded-lg p-3 text-center">
                    <div className="text-2xl font-black text-gray-800">🔥</div>
                    <div className="text-xs font-bold text-gray-600">Active</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative strip */}
            <div className="h-3 bg-gradient-to-r from-yellow-400 via-pink-400 via-purple-400 to-cyan-400"></div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Profile