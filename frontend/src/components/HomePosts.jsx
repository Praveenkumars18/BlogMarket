/* eslint-disable react/prop-types */
import {IF} from '../url'

const HomePosts = ({post}) => {
  return (
    <div className="w-full group cursor-pointer mb-8">
      <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-2 hover:translate-y-2 transition-all duration-300 overflow-hidden relative">
        
        {/* Decorative corner elements */}
        <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black z-10"></div>
        <div className="absolute top-3 left-3 w-3 h-3 bg-pink-400 rounded-full border-2 border-black z-10"></div>
        
        <div className="flex flex-col md:flex-row p-6 space-y-4 md:space-y-0 md:space-x-6">
          
          {/* Image Section */}
          <div className="w-full md:w-[35%] relative group">
            <div className="relative overflow-hidden rounded-xl border-3 border-black shadow-[6px_6px_0px_0px_#000000] aspect-video md:aspect-square">
              <img 
                src={IF+post.photo} 
                alt={post.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Image overlay with retro effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-400 to-purple-500 px-3 py-1 rounded-full border-2 border-white shadow-[2px_2px_0px_0px_#000000] transform -rotate-12">
                <span className="text-white font-bold text-xs uppercase tracking-wide">Featured</span>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col w-full md:w-[65%] justify-between">
            
            {/* Title */}
            <div className="mb-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800 leading-tight group-hover:text-purple-800 transition-colors duration-300">
                {post.title}
              </h1>
              
              {/* Decorative underline */}
              <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mt-2 group-hover:w-24 transition-all duration-300"></div>
            </div>
            
            {/* Author and Date Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
              
              {/* Author */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center border-2 border-black">
                  <span className="text-white font-bold text-sm">@</span>
                </div>
                <span className="font-bold text-purple-800 text-sm md:text-base">
                  {post.username}
                </span>
              </div>
              
              {/* Date badges */}
              <div className="flex space-x-2">
                <div className="bg-yellow-300 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                  <p className="text-black font-bold text-xs">
                    {new Date(post.updatedAt).toString().slice(0,15)}
                  </p>
                </div>
                <div className="bg-pink-300 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                  <p className="text-black font-bold text-xs">
                    {new Date(post.updatedAt).toString().slice(16,24)}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-white rounded-lg border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000000] relative">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                {post.desc.slice(0,200)}
                <span className="text-purple-600 font-bold ml-1">...Read more</span>
              </p>
              
              {/* Read more button */}
              <div className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-white font-bold text-xs uppercase">→ Read</span>
              </div>
            </div>
            
            {/* Category tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="bg-gradient-to-r from-green-400 to-cyan-400 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] transform hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xs uppercase">✨ Trending</span>
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-red-400 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] transform hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xs uppercase">🔥 Hot</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative strip */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 via-purple-400 to-cyan-400"></div>
      </div>
    </div>
  )
}

export default HomePosts