const Loader = () => {
  return (
    <div role="status" className="flex flex-col items-center justify-center p-8">
      
      {/* Main loader container */}
      <div className="relative flex items-center justify-center mb-6">
        
        {/* Outer rotating ring */}
        <div className="absolute w-24 h-24 border-4 border-dashed border-purple-400 rounded-full animate-spin"></div>
        
        {/* Middle rotating ring */}
        <div className="absolute w-16 h-16 border-4 border-solid border-pink-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        
        {/* Inner pulsing circle */}
        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse border-2 border-black shadow-[4px_4px_0px_0px_#000000]"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full border-2 border-black animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full border border-black animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-400 rounded-full border border-black animate-bounce" style={{animationDelay: '0.4s'}}></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-400 rounded-full border-2 border-black animate-bounce" style={{animationDelay: '0.6s'}}></div>
      </div>
      
      {/* Loading text with retro styling */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 p-4 rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_#000000] mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-white font-black text-lg uppercase tracking-wider">Loading</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-48 h-4 bg-gray-300 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000000] overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 rounded-full animate-pulse relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      {/* Fun loading messages */}
      <div className="mt-6 text-center">
        <p className="text-purple-800 font-bold text-sm animate-pulse">
          ✨ Preparing awesome content for you! ✨
        </p>
      </div>
      
      {/* Retro geometric shapes background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-300 rotate-45 animate-spin opacity-20" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-pink-300 rotate-45 animate-spin opacity-20" style={{animationDuration: '4s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-cyan-300 rotate-45 animate-spin opacity-20" style={{animationDuration: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-purple-300 rotate-45 animate-spin opacity-20" style={{animationDuration: '5s'}}></div>
      </div>
    </div>
  )
}

export default Loader