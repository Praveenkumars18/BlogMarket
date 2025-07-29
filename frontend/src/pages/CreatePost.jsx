import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {ImCross} from 'react-icons/im'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { URL } from '../url'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const CreatePost = () => {
   
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const {user}=useContext(UserContext)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate=useNavigate()

    // Redirect if not logged in
    useEffect(() => {
      if (!user) {
        navigate("/login")
      }
    }, [user, navigate])

    const deleteCategory=(i)=>{
       let updatedCats=[...cats]
       updatedCats.splice(i)
       setCats(updatedCats)
    }

    const addCategory=()=>{
        let updatedCats=[...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
    }

    const handleCreate=async (e)=>{
        e.preventDefault()
        
        if (!user) {
          setError("Please login to create a post")
          navigate("/login")
          return
        }

        if (!title || !desc) {
          setError("Please fill in all required fields")
          return
        }

        setLoading(true)
        setError("")
        
        const post={
          title,
          desc,
          username:user.username,
          userId:user._id,
          categories:cats
        }

        if(file){
          const data=new FormData()
          const filename=Date.now()+file.name
          data.append("img",filename)
          data.append("file",file)
          post.photo=filename
          try{
            const imgUpload=await axios.post(URL+"/api/upload",data, {withCredentials:true})
          }
          catch(err){
            console.log(err)
            setError("Failed to upload image")
            setLoading(false)
            return
          }
        }
        
        try{
          const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
          navigate("/posts/post/"+res.data._id)
        }
        catch(err){
          console.log(err)
          if (err.response?.status === 401) {
            setError("Please login again")
            navigate("/login")
          } else {
            setError("Failed to create post. Please try again.")
          }
          setLoading(false)
        }
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <Navbar/>
        
        {/* Main Container */}
        <div className='px-6 md:px-[200px] mt-8 pb-16'>
          
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] p-8 mb-8 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-cyan-400 rounded-full border-2 border-black"></div>
            <div className="absolute top-4 left-4 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
            <div className="absolute bottom-4 right-8 w-3 h-3 bg-pink-300 rounded-full border-2 border-black"></div>
            
            <div className="relative z-10">
              <h1 className='font-black text-3xl md:text-4xl text-white drop-shadow-[4px_4px_0px_#000000] mb-2'>
                ✨ Create Amazing Post
              </h1>
              <p className="text-white font-bold text-lg drop-shadow-[2px_2px_0px_#000000]">
                Share your story with the world! 🚀
              </p>
            </div>
            
            {/* Bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400"></div>
          </div>

          {/* Form Container */}
          <div className="bg-gradient-to-br from-white via-yellow-50 to-pink-50 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] p-8 relative overflow-hidden">
            
            {/* Corner decorations */}
            <div className="absolute top-3 right-3 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>
            <div className="absolute top-3 left-3 w-3 h-3 bg-orange-400 rounded-full border-2 border-black"></div>
            
            <form className='w-full flex flex-col space-y-6 md:space-y-8 relative z-10'>
              
              {/* Title Input */}
              <div className="space-y-2">
                <label className="font-black text-lg text-purple-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  📝 Post Title
                </label>
                <div className="relative">
                  <input 
                    onChange={(e)=>setTitle(e.target.value)} 
                    type="text" 
                    placeholder='Enter your amazing post title...' 
                    className='w-full px-6 py-4 border-3 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] bg-white font-bold text-gray-800 placeholder-gray-500 focus:shadow-[3px_3px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200 outline-none'
                  />
                  <div className="absolute top-3 right-3 w-3 h-3 bg-purple-400 rounded-full border border-black"></div>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="font-black text-lg text-purple-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  🖼️ Upload Image
                </label>
                <div className="relative bg-gradient-to-r from-cyan-100 to-blue-100 border-3 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] p-6 hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  <input 
                    onChange={(e)=>setFile(e.target.files[0])} 
                    type="file"  
                    className='w-full font-bold text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-2 file:border-black file:text-sm file:font-bold file:bg-gradient-to-r file:from-pink-400 file:to-purple-400 file:text-white file:shadow-[2px_2px_0px_0px_#000000] hover:file:shadow-[1px_1px_0px_0px_#000000] hover:file:translate-x-0.5 hover:file:translate-y-0.5 file:transition-all file:duration-200 file:cursor-pointer'
                  />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full border border-black"></div>
                </div>
              </div>

              {/* Categories Section */}
              <div className="space-y-4">
                <label className="font-black text-lg text-purple-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  🏷️ Categories
                </label>
                
                {/* Category Input */}
                <div className='flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4'>
                  <div className="flex-1 relative">
                    <input 
                      value={cat} 
                      onChange={(e)=>setCat(e.target.value)} 
                      className='w-full px-6 py-4 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] bg-white font-bold text-gray-800 placeholder-gray-500 focus:shadow-[2px_2px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200 outline-none' 
                      placeholder='Enter category (e.g., Tech, Life, Travel)' 
                      type="text"
                    />
                    <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full border border-black"></div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={addCategory} 
                    className='bg-gradient-to-r from-green-400 to-cyan-400 text-white px-8 py-4 font-black border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer uppercase tracking-wide'
                  >
                    ➕ Add
                  </button>
                </div>

                {/* Categories Display */}
                <div className='flex flex-wrap gap-3 mt-4'>
                  {cats?.map((c,i)=>(
                    <div key={i} className='flex items-center space-x-2 bg-gradient-to-r from-pink-200 to-purple-200 border-3 border-black px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group'>
                      <span className="font-bold text-gray-800">#{c}</span>
                      <button
                        type="button"
                        onClick={()=>deleteCategory(i)} 
                        className='bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 cursor-pointer group-hover:scale-110'
                      >
                        <ImCross className="text-xs"/>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Textarea */}
              <div className="space-y-2">
                <label className="font-black text-lg text-purple-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  📖 Post Description
                </label>
                <div className="relative">
                  <textarea 
                    onChange={(e)=>setDesc(e.target.value)} 
                    rows={12} 
                    cols={30} 
                    className='w-full px-6 py-4 border-3 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] bg-white font-medium text-gray-800 placeholder-gray-500 focus:shadow-[3px_3px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200 outline-none resize-none' 
                    placeholder='Tell your story... What makes this post special? Share details, insights, and make it engaging! ✨'
                  />
                  <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400 rounded-full border border-black"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-400 rounded-full border border-black"></div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                onClick={handleCreate}
                disabled={loading}
                className={`w-full px-6 py-5 text-xl font-black text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl border-3 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-2 hover:translate-y-2 transition-all duration-300 transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Post...</span>
                  </div>
                ) : (
                  '🚀 PUBLISH POST'
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="bg-gradient-to-r from-red-400 to-pink-400 border-3 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_#000000] animate-pulse">
                  <h3 className="text-white font-bold text-center drop-shadow-[2px_2px_0px_#000000]">
                    ⚠️ {error}
                  </h3>
                </div>
              )}
            </form>

            {/* Bottom decorative strip */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-cyan-400 via-purple-400 to-pink-400"></div>
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default CreatePost