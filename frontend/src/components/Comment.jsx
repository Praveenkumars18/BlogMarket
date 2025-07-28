import axios from "axios"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import { URL } from "../url"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Comment = ({c,post}) => {

  const {user}=useContext(UserContext)
  const deleteComment=async(id)=>{
    try{
      await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
      window.location.reload(true)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="px-6 py-4 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 border-4 border-dashed border-purple-400 rounded-none my-4 shadow-[8px_8px_0px_0px_#9333ea] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#9333ea] transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">@</span>
          </div>
          <h3 className="font-black text-purple-800 text-lg tracking-wide uppercase">
            {c.author}
          </h3>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-300 px-3 py-1 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000000]">
            <p className="text-black font-bold text-xs">
              {new Date(c.updatedAt).toString().slice(0,15)}
            </p>
          </div>
          <div className="bg-pink-300 px-3 py-1 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000000]">
            <p className="text-black font-bold text-xs">
              {new Date(c.updatedAt).toString().slice(16,24)}
            </p>
          </div>
          {user?._id===c?.userId &&
            <button 
              className="bg-red-400 hover:bg-red-500 p-2 border-2 border-black rounded-full shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 group"
              onClick={()=>deleteComment(c._id)}
            >
              <MdDelete className="text-white text-lg group-hover:scale-110 transition-transform"/>
            </button>
          }
        </div>
      </div>
      
      <div className="bg-white border-2 border-black rounded-lg p-4 shadow-[4px_4px_0px_0px_#000000] mt-3">
        <p className="text-gray-800 font-medium leading-relaxed text-base">
          {c.comment}
        </p>
      </div>
      
      {/* Retro decorative elements */}
      <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full border-2 border-black opacity-60"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-pink-400 rounded-full border border-black opacity-60"></div>
    </div>
  )
}

export default Comment