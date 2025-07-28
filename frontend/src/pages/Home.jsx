import axios from "axios"
import Footer from "../components/Footer"
import HomePosts from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { IF, URL } from "../url"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Loader from '../components/Loader'
import { UserContext } from "../context/UserContext"
 
const Home = () => {
  
  const {search}=useLocation()
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/posts/"+search)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
      
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[search])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50">
      <Navbar/>
      
      {/* Hero Section */}
      {!search && (
        <div className="px-8 md:px-[200px] pt-8 pb-4">
          <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] p-8 mb-8 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-300 rounded-full border-2 border-black animate-bounce"></div>
            <div className="absolute top-4 left-4 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
            <div className="absolute bottom-4 right-8 w-3 h-3 bg-orange-400 rounded-full border-2 border-black"></div>
            <div className="absolute bottom-4 left-8 w-5 h-5 bg-red-400 rounded-full border-2 border-black"></div>
            
            {/* Floating badges */}
            <div className="absolute top-6 left-1/4 transform -rotate-12 bg-yellow-300 border-2 border-black px-3 py-1 rounded-full shadow-[3px_3px_0px_0px_#000000]">
              <span className="font-black text-black text-xs">✨ FRESH</span>
            </div>
            <div className="absolute top-6 right-1/4 transform rotate-12 bg-green-300 border-2 border-black px-3 py-1 rounded-full shadow-[3px_3px_0px_0px_#000000]">
              <span className="font-black text-black text-xs">🔥 HOT</span>
            </div>
            
            <div className="relative z-10 text-center">
              <h1 className='font-black text-4xl md:text-6xl text-white drop-shadow-[6px_6px_0px_#000000] mb-4 leading-tight'>
                🚀 Welcome to the Blog Universe!
              </h1>
              <p className="text-white font-bold text-xl md:text-2xl drop-shadow-[3px_3px_0px_#000000] mb-6">
                Discover amazing stories, insights, and adventures! ✨
              </p>
              
              {!user && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/login" className="bg-white text-purple-600 font-black px-8 py-4 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wide">
                    🔑 Login to Read
                  </Link>
                  <span className="text-white font-bold text-lg">or</span>
                  <Link to="/register" className="bg-yellow-300 text-black font-black px-8 py-4 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wide">
                    📝 Join Us!
                  </Link>
                </div>
              )}
            </div>
            
            {/* Bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 via-green-400 via-blue-400 to-red-400"></div>
          </div>
        </div>
      )}

      {/* Search Results Header */}
      {search && (
        <div className="px-8 md:px-[200px] pt-8 pb-4">
          <div className="bg-gradient-to-r from-green-400 to-cyan-400 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-6 mb-6 relative">
            <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
            <h2 className="font-black text-2xl md:text-3xl text-white drop-shadow-[3px_3px_0px_#000000]">
              🔍 Search Results
            </h2>
            <p className="text-white font-bold text-lg drop-shadow-[2px_2px_0px_#000000]">
              Found {posts.length} amazing posts for you!
            </p>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="px-8 md:px-[200px] min-h-[60vh] pb-8">
        
        {/* Stats Bar */}
        {!loader && !noResults && posts.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="bg-gradient-to-r from-pink-300 to-purple-300 border-3 border-black px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_#000000]">
              <span className="font-black text-gray-800">📚 {posts.length} Posts</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-orange-300 border-3 border-black px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_#000000]">
              <span className="font-black text-gray-800">✨ Fresh Content</span>
            </div>
            <div className="bg-gradient-to-r from-cyan-300 to-blue-300 border-3 border-black px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_#000000]">
              <span className="font-black text-gray-800">🚀 Ready to Read</span>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loader && (
          <div className="h-[40vh] flex justify-center items-center">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-12 relative">
              <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black animate-ping"></div>
              <div className="text-center">
                <div className="text-4xl mb-4 animate-bounce">🌟</div>
                <Loader/>
                <p className="text-white font-black text-xl drop-shadow-[2px_2px_0px_#000000] mt-4">
                  Loading awesome content...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {!loader && !noResults && posts.length > 0 && (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <div key={post._id} className="group">
                <Link to={user ? `/posts/post/${post._id}` : "/login"}>
                  <div className="transform hover:scale-[1.02] transition-all duration-300">
                    <HomePosts post={post}/>
                  </div>
                </Link>
                
                {/* Separator for visual appeal */}
                {index < posts.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* No Results State */}
        {!loader && noResults && (
          <div className="h-[40vh] flex justify-center items-center">
            <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] p-12 text-center relative overflow-hidden max-w-md">
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full border-2 border-black"></div>
              <div className="absolute top-4 left-4 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black"></div>
              <div className="absolute bottom-4 right-6 w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="font-black text-2xl md:text-3xl text-gray-800 mb-4 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  Oops! No Posts Found
                </h3>
                <p className="font-bold text-gray-600 mb-6 text-lg">
                  The universe seems empty here... 🌌
                </p>
                
                {user && (
                  <Link 
                    to="/write" 
                    className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white font-black px-8 py-4 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
                  >
                    🚀 Create First Post
                  </Link>
                )}
                
                {!user && (
                  <Link 
                    to="/login" 
                    className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-black px-8 py-4 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
                  >
                    🔑 Login to Explore
                  </Link>
                )}
              </div>
              
              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"></div>
            </div>
          </div>
        )}

        {/* Call to Action for Logged in Users */}
        {!loader && !noResults && posts.length > 0 && user && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-8 relative inline-block">
              <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black animate-pulse"></div>
              <p className="text-white font-bold text-xl mb-4 drop-shadow-[2px_2px_0px_#000000]">
                Got something amazing to share? ✨
              </p>
              <Link 
                to="/write" 
                className="bg-white text-cyan-600 font-black px-8 py-4 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wide inline-block"
              >
                📝 Write New Post
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home