import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-gradient-to-br from-white via-yellow-50 to-pink-50 border-4 border-black rounded-3xl shadow-[20px_20px_0px_0px_#000000] hover:shadow-[15px_15px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 w-full max-w-2xl relative overflow-hidden p-10">
          {/* Decorative header strip */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"></div>
          {/* Corner decorations */}
          <div className="absolute top-6 right-6 w-4 h-4 bg-purple-400 rounded-full border-2 border-black"></div>
          <div className="absolute top-6 left-6 w-3 h-3 bg-cyan-400 rounded-full border-2 border-black"></div>
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_#000000] inline-block mb-4 transform -rotate-2">
              <h1 className="text-2xl font-black text-white drop-shadow-[2px_2px_0px_#000000]">
                About Blog Market ✨
              </h1>
            </div>
            <p className="text-gray-600 font-semibold max-w-xl mx-auto">
              <span className="font-bold text-purple-700">Blog Market</span> is a modern, vibrant platform for sharing your thoughts, stories, and expertise with the world. Whether you're a passionate writer, a curious reader, or someone who loves to connect with a creative community, Blog Market is your go-to destination.
            </p>
          </div>
          <div className="space-y-6 text-gray-700 text-lg font-medium">
            <p>
              🚀 <span className="font-bold text-pink-600">Create</span> and publish beautiful blogs with ease. Our editor and tools make it simple for anyone to start writing.
            </p>
            <p>
              🌟 <span className="font-bold text-yellow-600">Discover</span> inspiring content from writers around the globe. Explore trending topics, personal stories, and expert advice.
            </p>
            <p>
              🤝 <span className="font-bold text-cyan-600">Connect</span> with a supportive community. Comment, like, and follow your favorite authors.
            </p>
            <p>
              🔒 <span className="font-bold text-purple-600">Safe & Secure</span>: Your data and privacy are our top priorities. Enjoy blogging with peace of mind.
            </p>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-lg font-black text-white">
              Start your blogging journey with us today!
            </span>
          </div>
          {/* Bottom decorative strip */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 