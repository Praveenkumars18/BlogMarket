import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {ImCross} from 'react-icons/im'
import axios from "axios"
import { URL } from "../url"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const EditPost = () => {

    const postId=useParams().id
    const {user}=useContext(UserContext)
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])

    const fetchPost=async()=>{
      try{
        const res=await axios.get(URL+"/api/posts/"+postId)
        setTitle(res.data.title)
        setDesc(res.data.desc)
        setFile(res.data.photo)
        setCats(res.data.categories)

      }
      catch(err){
        console.log(err)
      }
    }

    const handleUpdate=async (e)=>{
      e.preventDefault()
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
          const imgUpload=await axios.post(URL+"/api/upload",data)
        }
        catch(err){
          console.log(err)
        }
      }
     
      try{
        const res=await axios.put(URL+"/api/posts/"+postId,post,{withCredentials:true})
        navigate("/posts/post/"+res.data._id)
      }
      catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      fetchPost()
    },[postId])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        <Navbar/>
        
        {/* Main Container */}
        <div className='px-6 md:px-[200px] mt-8 pb-16'>
          
          {/* Header Section with Edit Theme */}
          <div className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] p-8 mb-8 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-300 rounded-full border-2 border-black"></div>
            <div className="absolute top-4 left-4 w-4 h-4 bg-cyan-400 rounded-full border-2 border-black"></div>
            <div className="absolute bottom-4 right-8 w-3 h-3 bg-green-300 rounded-full border-2 border-black"></div>
            
            {/* Edit Mode Badge */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -rotate-12 bg-yellow-300 border-3 border-black px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_#000000]">
              <span className="font-black text-black text-sm uppercase tracking-wide">✏️ Edit Mode</span>
            </div>
            
            <div className="relative z-10 mt-8">
              <h1 className='font-black text-3xl md:text-4xl text-white drop-shadow-[4px_4px_0px_#000000] mb-2'>
                🔧 Update Your Post
              </h1>
              <p className="text-white font-bold text-lg drop-shadow-[2px_2px_0px_#000000]">
                Polish and perfect your masterpiece! ✨
              </p>
            </div>
            
            {/* Bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
          </div>

          {/* Form Container */}
          <div className="bg-gradient-to-br from-white via-orange-50 to-yellow-50 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] p-8 relative overflow-hidden">
            
            {/* Corner decorations */}
            <div className="absolute top-3 right-3 w-4 h-4 bg-orange-400 rounded-full border-2 border-black"></div>
            <div className="absolute top-3 left-3 w-3 h-3 bg-red-400 rounded-full border-2 border-black"></div>
            
            {/* Loading State Indicator */}
            {!title && (
              <div className="absolute top-8 right-8 bg-gradient-to-r from-blue-400 to-purple-400 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] animate-pulse">
                <span className="text-white font-bold text-xs">Loading...</span>
              </div>
            )}
            
            <form className='w-full flex flex-col space-y-6 md:space-y-8 relative z-10'>
              
              {/* Title Input */}
              <div className="space-y-2">
                <label className="font-black text-lg text-orange-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  ✏️ Edit Title
                </label>
                <div className="relative">
                  <input 
                    onChange={(e)=>setTitle(e.target.value)} 
                    value={title}
                    type="text" 
                    placeholder='Update your post title...' 
                    className='w-full px-6 py-4 border-3 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] bg-white font-bold text-gray-800 placeholder-gray-500 focus:shadow-[3px_3px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200 outline-none'
                  />
                  <div className="absolute top-3 right-3 w-3 h-3 bg-orange-400 rounded-full border border-black"></div>
                  {/* Edit indicator */}
                  <div className="absolute top-1 left-1 bg-yellow-300 border border-black px-2 py-0.5 rounded text-xs font-bold">EDIT</div>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="font-black text-lg text-orange-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  🖼️ Update Image
                </label>
                <div className="relative bg-gradient-to-r from-orange-100 to-yellow-100 border-3 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] p-6 hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  <input 
                    onChange={(e)=>setFile(e.target.files[0])} 
                    type="file"  
                    className='w-full font-bold text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-2 file:border-black file:text-sm file:font-bold file:bg-gradient-to-r file:from-orange-400 file:to-red-400 file:text-white file:shadow-[2px_2px_0px_0px_#000000] hover:file:shadow-[1px_1px_0px_0px_#000000] hover:file:translate-x-0.5 hover:file:translate-y-0.5 file:transition-all file:duration-200 file:cursor-pointer'
                  />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full border border-black"></div>
                  
                  {/* Current file indicator */}
                  {file && typeof file === 'string' && (
                    <div className="mt-3 bg-green-200 border-2 border-black px-3 py-2 rounded-lg">
                      <span className="text-green-800 font-bold text-sm">📎 Current: {file}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Categories Section */}
              <div className="space-y-4">
                <label className="font-black text-lg text-orange-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  🏷️ Edit Categories
                </label>
                
                {/* Category Input */}
                <div className='flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4'>
                  <div className="flex-1 relative">
                    <input 
                      value={cat} 
                      onChange={(e)=>setCat(e.target.value)} 
                      className='w-full px-6 py-4 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] bg-white font-bold text-gray-800 placeholder-gray-500 focus:shadow-[2px_2px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200 outline-none' 
                      placeholder='Add new category...' 
                      type="text"
                    />
                    <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-400 rounded-full border border-black"></div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={addCategory} 
                    className='bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 font-black border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer uppercase tracking-wide'
                  >
                    ➕ Add
                  </button>
                </div>

                {/* Categories Display */}
                <div className='flex flex-wrap gap-3 mt-4'>
                  {cats?.map((c,i)=>(
                    <div key={i} className='flex items-center space-x-2 bg-gradient-to-r from-yellow-200 to-orange-200 border-3 border-black px-4 py-2 rounded-full shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group'>
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
                <label className="font-black text-lg text-orange-800 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
                  📖 Edit Description
                </label>
                <div className="relative">
                  <textarea 
                    onChange={(e)=>setDesc(e.target.value)} 
                    value={desc}
                    rows={12} 
                    cols={30} 
                    className='w-full px-6 py-4 border-3 border-black rounded-xl shadow-[6px_6px_0px_0px_#000000] bg-white font-medium text-gray-800 placeholder-gray-500 focus:shadow-[3px_3px_0px_0px_#000000] focus:translate-x-1 focus:translate-y-1 transition-all duration-200 outline-none resize-none' 
                    placeholder='Update your story... Make it even better! ✨'
                  />
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full border border-black"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-red-400 rounded-full border border-black"></div>
                  
                  {/* Edit mode indicator */}
                  <div className="absolute top-2 left-2 bg-orange-300 border border-black px-2 py-1 rounded text-xs font-bold">
                    ✏️ EDITING
                  </div>
                </div>
              </div>

              {/* Update Button */}
              <div className="flex justify-center pt-4">
                <button 
                  onClick={handleUpdate} 
                  className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 w-full sm:w-auto text-white font-black px-12 py-6 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-2 hover:translate-y-2 transition-all duration-300 text-xl uppercase tracking-wider relative overflow-hidden group'
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>🔄 Update Post</span>
                  </span>
                  
                  {/* Button decoration */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full border-2 border-black opacity-80"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-300 rounded-full border border-black opacity-80"></div>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Update pulse effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 animate-pulse"></div>
                </button>
              </div>
            </form>

            {/* Bottom decorative strip */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-red-400 via-pink-400 to-yellow-400"></div>
          </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default EditPost