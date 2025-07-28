import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
            </div>
            <p className="text-gray-600 font-semibold max-w-xl mx-auto">
              Your privacy is important to us at <span className="font-bold text-purple-700">Blog Market</span>. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
          <div className="space-y-6 text-gray-700 text-lg font-medium">
            <p>
              🔒 <span className="font-bold text-purple-600">Data Security:</span> We use industry-standard security measures to protect your data. Your personal information is never sold or shared with third parties without your consent.
            </p>
            <p>
              📧 <span className="font-bold text-cyan-600">Information Collection:</span> We collect only the information necessary to provide our services, such as your email and username when you register.
            </p>
            <p>
              🚫 <span className="font-bold text-pink-600">No Spam:</span> We do not send unsolicited emails. You control your notification preferences.
            </p>
            <p>
              📝 <span className="font-bold text-yellow-600">Content:</span> All content you create remains yours. You can edit or delete your posts at any time.
            </p>
            <p>
              For more details or questions, contact us at <a href="mailto:support@blogmarket.com" className="text-blue-600 underline">support@blogmarket.com</a>.
            </p>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-lg font-black text-white">
              Thank you for trusting Blog Market!
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

export default PrivacyPolicy; 