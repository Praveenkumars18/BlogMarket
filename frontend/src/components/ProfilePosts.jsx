/* eslint-disable react/prop-types */
import {IF} from '../url'

const ProfilePosts = ({p}) => {
  return (
    <div className="relative group">
      {/* Main card container with brutalist styling */}
      <div className="w-full bg-gradient-to-br from-white via-gray-50 to-purple-50 border-4 border-black shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 rounded-2xl overflow-hidden mt-8 relative">
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-yellow-400 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[25px] border-r-transparent border-t-[25px] border-t-pink-400 opacity-80"></div>
        
        {/* Content wrapper */}
        <div className="flex flex-col md:flex-row p-6 space-y-4 md:space-y-0 md:space-x-6 relative z-10">
          
          {/* Image container */}
          <div className="w-full md:w-[35%] h-[200px] md:h-[180px] relative group">
            <div className="relative h-full w-full border-3 border-black shadow-[6px_6px_0px_0px_#000000] rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
              <img 
                src={IF+p.photo} 
                alt={p.title} 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Decorative image corner */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000]"></div>
            </div>
          </div>
          
          {/* Content container */}
          <div className="flex flex-col w-full md:w-[65%] space-y-3">
            
            {/* Title with retro styling */}
            <div className="relative">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight relative z-10">
                {p.title}
              </h1>
              {/* Title underline decoration */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-30 -z-10 rounded-full"></div>
            </div>
            
            {/* Meta information with badges */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 mb-3">
              
              {/* Username badge */}
              <div className="inline-flex items-center">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000000] transform hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
                  <span className="text-white font-bold text-sm flex items-center">
                    <span className="mr-2">👤</span>
                    @{p.username}
                  </span>
                </div>
              </div>
              
              {/* Date badges */}
              <div className="flex flex-wrap gap-2">
                <div className="bg-gradient-to-r from-green-400 to-cyan-500 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] transform hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150">
                  <span className="text-white font-bold text-xs flex items-center">
                    <span className="mr-1">📅</span>
                    {new Date(p.updatedAt).toString().slice(0,15)}
                  </span>
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-red-500 px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_#000000] transform hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150">
                  <span className="text-white font-bold text-xs flex items-center">
                    <span className="mr-1">🕒</span>
                    {new Date(p.updatedAt).toString().slice(16,24)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Description with styling */}
            <div className="relative">
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                {p.desc.slice(0,200)}
                <span className="text-purple-600 font-bold">
                  {" "}...Read more
                </span>
              </p>
              
              {/* Read more button/indicator */}
              <div className="mt-3 inline-flex">
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 px-4 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-pointer">
                  <span className="text-white font-bold text-sm flex items-center">
                    Continue Reading
                    <span className="ml-2">📖</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient strip */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 via-purple-400 to-cyan-400"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full border-2 border-black opacity-60"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-400 rounded-full border border-black opacity-60"></div>
        <div className="absolute bottom-6 right-6 w-2 h-2 bg-green-400 rounded-full border border-black opacity-60"></div>
      </div>
    </div>
  )
}

export default ProfilePosts