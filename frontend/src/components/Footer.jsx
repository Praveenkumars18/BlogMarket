import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      {/* Main Footer Section */}
      <div className="mt-12 w-full bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 px-8 md:px-[300px] relative overflow-hidden">
        {/* Retro background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-pink-400 rounded-full"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-cyan-400 rounded-full -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-green-400 rounded-full translate-x-14 translate-y-14"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row space-y-8 md:space-y-0 items-start md:justify-between py-12">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col space-y-4 group">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_#000000] mb-2 w-fit">
              <h3 className="font-black text-black text-lg uppercase tracking-wider">🌐 Navigation</h3>
            </div>
            <div className="space-y-3">
              <Link to="/" className="text-white font-bold hover:text-yellow-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Home
              </Link>
              <Link to="/about" className="text-white font-bold hover:text-yellow-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                About Us
              </Link>
            </div>
          </div>
          {/* Column 2: Legal */}
          <div className="flex flex-col space-y-4 group">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-lg border-3 border-black shadow-[4px_4px_0px_0px_#000000] mb-2 w-fit">
              <h3 className="font-black text-white text-lg uppercase tracking-wider">⚖️ Legal</h3>
            </div>
            <div className="space-y-3">
              <Link to="/privacy-policy" className="text-white font-bold hover:text-cyan-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white font-bold hover:text-cyan-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 via-cyan-400 to-green-400"></div>
      </div>

      {/* Copyright Section */}
      <div className="relative bg-black border-t-4 border-dashed border-yellow-400 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="text-8xl font-black text-white rotate-12">BLOG</div>
        </div>
        
        <div className="relative z-10 py-6 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 p-4 rounded-full border-3 border-white shadow-[6px_6px_0px_0px_#ffffff] mb-4">
            <span className="text-2xl mr-2">🚀</span>
            <span className="font-black text-white text-lg tracking-wider uppercase">Blog Market</span>
            <span className="text-2xl ml-2">✨</span>
          </div>
          
          <p className="text-white font-bold text-sm bg-gray-800 inline-block px-6 py-2 rounded-full border-2 border-gray-600">
            All rights reserved © Blog Market 2023 - Made with 💜
          </p>
          
          {/* Social media style dots */}
          <div className="flex justify-center space-x-3 mt-4">
            <div className="w-3 h-3 bg-pink-400 rounded-full border-2 border-white animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full border-2 border-white animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer