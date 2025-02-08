import { useNavigate } from "react-router-dom"

export const Start = () => {
    const navigate = useNavigate();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-blue-500 flex items-center justify-center p-4">
        {/* Main container with 3D effect */}
        <div className="relative w-full max-w-2xl aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
          {/* Floating orbs */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full shadow-lg"></div>
          <div className="absolute bottom-12 right-8 w-8 h-8 bg-gradient-to-br from-orange-300 to-red-400 rounded-full shadow-lg"></div>
          <div className="absolute top-1/3 right-12 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg"></div>
          
          {/* Content */}
          <div className="relative text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl text-white font-bold">WELCOME TO</h2>
              <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
                THE ULTIMATE
              </h1>
              <div className="text-8xl font-black text-white tracking-wider drop-shadow-xl">
                QUIZ
              </div>
            </div>
  
            {/* Main start button */}
            <div className="space-y-4">
              <button className="
                w-64 py-4 px-8
                bg-gradient-to-br from-blue-400 to-blue-600
                hover:from-blue-500 hover:to-blue-700
                text-white text-2xl font-bold
                rounded-full
                transform transition-all
                shadow-lg shadow-blue-600/50
                hover:shadow-xl hover:shadow-blue-600/60
                border-2 border-white/20
                relative
                overflow-hidden
              " onClick={async ()=>{
                console.log("button is being clicked");
                
                navigate('/quiz')
              }}>
                START QUIZ
              </button>
  
              {/* Secondary pink button */}
              <button className="
                w-64 py-4 px-8
                bg-gradient-to-br from-pink-400 to-purple-600
                hover:from-pink-500 hover:to-purple-700
                text-white text-2xl font-bold
                rounded-full
                transform transition-all
                shadow-lg shadow-purple-600/50
                hover:shadow-xl hover:shadow-purple-600/60
                border-2 border-white/20
              ">
                INSTRUCTIONS
              </button>
            </div>
  
            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-blue-600/20 rounded-lg border-2 border-white/10 backdrop-blur-sm grid grid-cols-3 gap-1 p-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white/20 rounded-sm"></div>
              ))}
            </div>
  
            <div className="absolute top-8 right-8 w-12 h-12 bg-blue-600/20 rounded-full border-2 border-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white text-2xl font-bold">?</span>
            </div>
          </div>
        </div>
      </div>
    );
  };