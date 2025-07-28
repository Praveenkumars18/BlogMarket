import { useNavigate, useParams } from "react-router-dom"
import Comment from "../components/Comment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import axios from "axios"
import { URL,IF } from "../url"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Loader from "../components/Loader"

const PostDetails = () => {
  const postId = useParams().id
  const [post, setPost] = useState({})
  const {user} = useContext(UserContext)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()

  const fetchPost = async() => {
    try {
      const res = await axios.get(URL + "/api/posts/" + postId)
      setPost(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(URL + "/api/posts/" + postId, {withCredentials: true})
      console.log(res.data)
      navigate("/")
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [postId])

  const fetchPostComments = async() => {
    setLoader(true)
    try {
      const res = await axios.get(URL + "/api/comments/post/" + postId)
      setComments(res.data)
      setLoader(false)
    } catch(err) {
      setLoader(true)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPostComments()
  }, [postId])

  const postComment = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to comment.");
      return;
    }

    try {
      const res = await axios.post(
        URL + "/api/comments/create",
        {
          comment: comment,
          author: user.username,
          postId: postId,
          userId: user._id,
        },
        { withCredentials: true }
      );
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-32 left-8 w-20 h-20 bg-cyan-300 rounded-full border-4 border-black opacity-10 animate-pulse"></div>
      <div className="absolute top-64 right-12 w-24 h-24 bg-pink-300 rounded-full border-4 border-black opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-24 w-16 h-16 bg-yellow-300 rounded-full border-4 border-black opacity-10 animate-pulse delay-500"></div>
      
      <Navbar/>
      
      {loader ? (
        <div className="h-[80vh] flex flex-col justify-center items-center w-full space-y-6">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_#000000] animate-pulse">
            <Loader/>
          </div>
          <div className="bg-white px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
            <p className="font-bold text-purple-600">🚀 Loading amazing content...</p>
          </div>
        </div>
      ) : (
        <div className="px-8 md:px-[200px] py-8 space-y-8">
          
          {/* Header Section */}
          <div className="bg-gradient-to-br from-white via-yellow-50 to-pink-50 border-4 border-black rounded-3xl shadow-[16px_16px_0px_0px_#000000] p-8 relative overflow-hidden">
            
            {/* Decorative corner elements */}
            <div className="absolute top-4 right-4 w-5 h-5 bg-purple-400 rounded-full border-2 border-black"></div>
            <div className="absolute top-4 left-4 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black"></div>
            
            {/* Title and Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="flex-1">
                <h1 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 leading-tight">
                  {post.title}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-3"></div>
              </div>
              
              {/* Edit/Delete Actions */}
              {user?._id === post?.userId && (
                <div className="flex items-center space-x-3">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-cyan-500 p-3 rounded-full border-3 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 cursor-pointer group"
                    onClick={() => navigate("/edit/" + postId)}
                  >
                    <BiEdit className="text-white text-xl group-hover:scale-110 transition-transform"/>
                  </div>
                  <div 
                    className="bg-gradient-to-r from-red-400 to-pink-500 p-3 rounded-full border-3 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 cursor-pointer group"
                    onClick={handleDeletePost}
                  >
                    <MdDelete className="text-white text-xl group-hover:scale-110 transition-transform"/>
                  </div>
                </div>
              )}
            </div>
            
            {/* Author and Date Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 space-y-3 sm:space-y-0">
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-3 border-black shadow-[4px_4px_0px_0px_#000000]">
                  <span className="text-white font-black text-lg">@</span>
                </div>
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                  <span className="font-black text-white">@{post.username}</span>
                </div>
              </div>
              
              {/* Date badges */}
              <div className="flex space-x-3">
                <div className="bg-yellow-300 px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000000]">
                  <p className="text-black font-bold text-sm">
                    📅 {new Date(post.updatedAt).toString().slice(0,15)}
                  </p>
                </div>
                <div className="bg-pink-300 px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000000]">
                  <p className="text-black font-bold text-sm">
                    🕐 {new Date(post.updatedAt).toString().slice(16,24)}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom decorative strip */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"></div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div className="bg-white border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] overflow-hidden">
              <img 
                src={IF + post.photo} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                alt={post.title}
              />
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-gradient-to-br from-white via-yellow-50 to-pink-50 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] p-8 relative">
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 leading-relaxed font-medium text-base md:text-lg">
                {post.desc}
              </p>
            </div>
            
            {/* Bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
          </div>

          {/* Categories Section */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-3 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000000] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                <span className="font-black text-white">🏷️ Categories:</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {post.categories?.map((c, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
                  >
                    <span className="font-bold text-white text-sm">#{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 border-4 border-black rounded-3xl shadow-[12px_12px_0px_0px_#000000] p-8 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-5 h-5 bg-yellow-400 rounded-full border-2 border-black"></div>
            <div className="absolute top-4 left-4 w-4 h-4 bg-pink-400 rounded-full border-2 border-black"></div>
            
            {/* Comments Header */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_#000000] inline-block transform -rotate-1">
                <h3 className="text-xl font-black text-white drop-shadow-[2px_2px_0px_#000000]">
                  💬 Comments ({comments?.length || 0})
                </h3>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6 mb-8">
              {comments?.map((c) => (
                <div key={c._id} className="transform hover:scale-[1.02] transition-transform duration-300">
                  <Comment c={c} post={post} />
                </div>
              ))}
              
              {comments?.length === 0 && (
                <div className="text-center py-8">
                  <div className="bg-gradient-to-r from-yellow-100 to-pink-100 border-2 border-black rounded-xl p-6 shadow-[4px_4px_0px_0px_#000000] inline-block">
                    <p className="font-bold text-gray-600">💭 No comments yet. Be the first to share your thoughts!</p>
                  </div>
                </div>
              )}
            </div>

            {/* Add Comment Form */}
            <div className="bg-white border-3 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000000] p-6 relative">
              
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                <span className="text-white font-bold text-sm">✍️ ADD COMMENT</span>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <input 
                  onChange={(e) => setComment(e.target.value)} 
                  type="text" 
                  placeholder="Share your amazing thoughts..." 
                  className="flex-1 px-6 py-4 border-3 border-black rounded-xl outline-0 font-semibold text-gray-800 bg-gradient-to-r from-yellow-50 to-pink-50 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 focus:bg-white"
                />
                <button 
                  onClick={postComment} 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 font-black text-sm md:text-base transform hover:scale-105"
                >
                  🚀 POST COMMENT
                </button>
              </div>
            </div>
            
            {/* Bottom decorative strip */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
          </div>
        </div>
      )}
      
      <Footer/>
    </div>
  )
}

export default PostDetails