import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
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
                Terms & Conditions
              </h1>
            </div>
            <p className="text-gray-600 font-semibold max-w-xl mx-auto">
              Please read these terms and conditions carefully before using <span className="font-bold text-purple-700">Blog Market</span>.
            </p>
          </div>
          <div className="space-y-6 text-gray-700 text-lg font-medium">
            <p>
              ✅ <span className="font-bold text-green-600">Use of Service:</span> By using Blog Market, you agree to follow all applicable laws and respect other users.
            </p>
            <p>
              📝 <span className="font-bold text-pink-600">Content:</span> You are responsible for the content you post. Do not post illegal, offensive, or plagiarized material.
            </p>
            <p>
              🚫 <span className="font-bold text-yellow-600">Account:</span> You are responsible for maintaining the confidentiality of your account. Notify us immediately of any unauthorized use.
            </p>
            <p>
              🔒 <span className="font-bold text-purple-600">Privacy:</span> Your privacy is important. See our Privacy Policy for more details.
            </p>
            <p>
              💡 <span className="font-bold text-cyan-600">Changes:</span> We may update these terms at any time. Continued use of Blog Market means you accept the new terms.
            </p>
            <p>
              For questions, contact us at <a href="mailto:support@blogmarket.com" className="text-blue-600 underline">support@blogmarket.com</a>.
            </p>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-lg font-black text-white">
              Thank you for being part of Blog Market!
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

export default Terms; 