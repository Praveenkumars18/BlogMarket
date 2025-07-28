import { Link, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import HomePosts from "../components/HomePosts"
import Loader from "../components/Loader"

const MyBlogs = () => {
  const {search} = useLocation()
  const [posts, setPosts] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [loader, setLoader] = useState(false)
  const {user} = useContext(UserContext)

  const fetchPosts = async() => {
    setLoader(true)
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id)
      setPosts(res.data)
      if(res.data.length === 0) {
        setNoResults(true)
      } else {
        setNoResults(false)
      }
      setLoader(false)
    } catch(err) {
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [search])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-300 rounded-full border-4 border-black opacity-10 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300 rounded-full border-4 border-black opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-32 w-20 h-20 bg-yellow-300 rounded-full border-4 border-black opacity-10 animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-300 rounded-full border-4 border-black opacity-10 animate-pulse delay-700"></div>
      
      <Navbar/>
      
      {/* Header Section */}
      <div className="px-8 md:px-[200px] py-8">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 border-4 border-black rounded-3xl shadow-[12px_12px_0px_0px_#000000] p-8 mb-8 relative overflow-hidden">
          
          {/* Decorative corner elements */}
          <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full border-2 border-black"></div>
          <div className="absolute top-4 left-4 w-4 h-4 bg-cyan-300 rounded-full border-2 border-black"></div>
          <div className="absolute bottom-4 right-12 w-5 h-5 bg-yellow-300 rounded-full border-2 border-black"></div>
          
          {/* Header content */}
          <div className="text-center relative z-10">
            <div className="bg-white px-6 py-3 rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_#000000] inline-block mb-4 transform -rotate-1">
              <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                📚 My Blog Collection
              </h1>
            </div>
            <p className="text-white font-bold text-lg drop-shadow-[2px_2px_0px_#000000]">
              ✨ Your creative space, your stories ✨
            </p>
            
            {/* Stats badges */}
            <div className="flex justify-center space-x-4 mt-6">
              <div className="bg-white px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                <span className="font-black text-purple-600">📝 {posts.length} Posts</span>
              </div>
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                <span className="font-black text-white">👤 {user?.username || 'Author'}</span>
              </div>
            </div>
          </div>
          
          {/* Bottom decorative strip */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 md:px-[200px] min-h-[60vh] pb-12">
        
        {/* Loader State */}
        {loader ? (
          <div className="flex flex-col justify-center items-center h-[40vh] space-y-6">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_#000000] animate-pulse">
              <Loader/>
            </div>
            <div className="bg-white px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
              <p className="font-bold text-purple-600">🚀 Loading your awesome content...</p>
            </div>
          </div>
        ) : 
        
        /* No Results State */
        !noResults ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post._id} className="transform hover:scale-[1.02] transition-transform duration-300">
                <Link to={user ? `/posts/post/${post._id}` : "/login"}>
                  <HomePosts post={post}/>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          
          /* Empty State */
          <div className="flex flex-col justify-center items-center h-[40vh] space-y-8">
            <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 border-4 border-black rounded-3xl shadow-[16px_16px_0px_0px_#000000] p-12 text-center relative overflow-hidden max-w-md">
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
              <div className="absolute top-4 left-4 w-3 h-3 bg-pink-400 rounded-full border-2 border-black"></div>
              <div className="absolute bottom-4 right-8 w-5 h-5 bg-cyan-400 rounded-full border-2 border-black"></div>
              
              <div className="space-y-6">
                {/* Sad emoji with animation */}
                <div className="text-6xl animate-bounce">📝</div>
                
                {/* Main message */}
                <div className="bg-white px-6 py-4 rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_#000000]">
                  <h3 className="text-xl font-black text-gray-800 mb-2">No Posts Yet!</h3>
                  <p className="text-gray-600 font-semibold">Your blog collection is waiting for its first masterpiece</p>
                </div>
                
                {/* Call to action */}
                <div className="space-y-4">
                  <p className="font-bold text-purple-600">🌟 Ready to start writing?</p>
                  
                  <Link to="/write" className="inline-block">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full border-3 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 transform hover:scale-105">
                      <span className="text-white font-black">✨ Create Your First Post</span>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>
            
            {/* Motivational badges */}
            <div className="flex space-x-4">
              <div className="bg-gradient-to-r from-green-400 to-cyan-400 px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] animate-pulse">
                <span className="text-white font-bold text-sm">💡 Share Ideas</span>
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-red-400 px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] animate-pulse delay-300">
                <span className="text-white font-bold text-sm">🚀 Build Audience</span>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] animate-pulse delay-600">
                <span className="text-white font-bold text-sm">⭐ Get Famous</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer/>
    </div>
  )
}

export default MyBlogs