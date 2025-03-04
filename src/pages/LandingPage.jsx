import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chessboard } from 'react-chessboard';
import NavBar from '../components/NavBar';
import ChessBackground from '../components/ChessBackground';

function LandingPage() {
  const [timeControl, setTimeControl] = useState('5+0');
  const navigate = useNavigate();
  
  // Prevent scrolling on body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  const handlePlay = () => {
    navigate('/play');
  };
  
  const handleSeek = () => {
    navigate('/play');
  };

  return (
    <div className="fixed inset-0 flex flex-col">
      {/* Chess-themed background */}
      <ChessBackground />

      {/* Navigation Bar */}
      <NavBar />

      <main className="flex-1 relative z-10 px-4 py-2 overflow-hidden flex flex-col">
        {/* Chess visualization for mobile only - positioned at top for visibility */}
        <div className="block md:hidden pt-2 pb-4">
          <div className="mx-auto relative w-44 h-44 sm:w-52 sm:h-52">
            <ChessVisualization />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8">
          {/* Left Side: App Philosophy */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-2 md:mt-0">
            <div className="text-center md:text-left mb-4 md:mb-8">
              <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight">
                <span className="text-gray-900">Chess,</span>
                <span className="text-blue-800 ml-2">Simplified</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-8 leading-relaxed">
                No sign-up required. No complex settings. 
                <span className="block font-semibold italic mt-2 text-blue-700">Just pure chess, instantly.</span>
              </p>
              
              {/* Enhanced instructions */}
              <div className="bg-white bg-opacity-70 rounded-lg shadow-lg p-3 md:p-4 border-l-4 border-indigo-500 mb-4 md:mb-6">
                <p className="text-gray-800 font-medium text-base md:text-lg">
                  <span className="block font-bold text-lg md:text-xl mb-1 md:mb-2 text-indigo-800">How to Play:</span>
                  Click <span className="font-bold text-indigo-700">Play</span> to start a game with a friend or 
                  <span className="font-bold text-green-700"> Seek</span> to find an online opponent.
                </p>
              </div>
            </div>
            
            {/* Controls */}
            <div className="w-full flex flex-col items-center md:items-start gap-3 md:gap-5 pb-6 md:pb-0">
              <div className="flex items-center gap-3 md:gap-4 w-full max-w-md">
                <button 
                  onClick={handlePlay}
                  className="flex-1 py-3 md:py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg text-lg font-medium hover:scale-105 duration-200"
                >
                  Play
                </button>
                
                <button 
                  onClick={handleSeek}
                  className="flex-1 py-3 md:py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-lg text-lg font-medium hover:scale-105 duration-200"
                >
                  Seek
                </button>
              </div>
              
              {/* Improved Time Control UI with clock icon and better labeling */}
              <div className="w-full max-w-md bg-white/70 rounded-lg shadow-md p-3 border border-gray-200">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">Game Duration</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="timeControl"
                      value="3+0"
                      checked={timeControl === "3+0"}
                      onChange={(e) => setTimeControl(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`text-center py-2 rounded-md cursor-pointer transition-all ${
                      timeControl === "3+0" 
                        ? "bg-indigo-600 text-white font-medium shadow-md" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                      3 min
                    </div>
                  </label>
                  
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="timeControl"
                      value="5+0"
                      checked={timeControl === "5+0"}
                      onChange={(e) => setTimeControl(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`text-center py-2 rounded-md cursor-pointer transition-all ${
                      timeControl === "5+0" 
                        ? "bg-indigo-600 text-white font-medium shadow-md" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                      5 min
                    </div>
                  </label>
                  
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="timeControl"
                      value="10+0"
                      checked={timeControl === "10+0"}
                      onChange={(e) => setTimeControl(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`text-center py-2 rounded-md cursor-pointer transition-all ${
                      timeControl === "10+0" 
                        ? "bg-indigo-600 text-white font-medium shadow-md" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                      10 min
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Chess Visualization - Only visible on desktop */}
          <div className="hidden md:flex md:w-1/2 justify-end">
            <div className="relative w-96 h-96">
              <ChessVisualization />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Updated Chess Visualization with optimized checkmate indicator
function ChessVisualization() {
  const containerRef = useRef(null);
  const [boardWidth, setBoardWidth] = useState(400);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        const size = Math.min(containerWidth, containerHeight) - 16; // Reduced padding to 16px total
        setBoardWidth(size);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      {/* 3D-like chess board effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg transform rotate-3 shadow-2xl">
        <div ref={containerRef} className="w-full h-full p-2 flex items-center justify-center">
          <div className="rounded overflow-hidden relative">
            <Chessboard 
              position="r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4"
              customDarkSquareStyle={{ backgroundColor: '#B58863' }}
              customLightSquareStyle={{ backgroundColor: '#F0D9B5' }}
              boardWidth={boardWidth}
              arePiecesDraggable={false}
            />
            
            {/* Improved checkmate indicator - better colors, no animation */}
            <div className="absolute top-0 left-1/2 w-[12.5%] h-[12.5%] pointer-events-none">
              <div 
                className="absolute inset-0" 
                style={{
                  background: 'radial-gradient(circle at center, rgba(220, 38, 38, 0.35) 0%, rgba(185, 28, 28, 0.25) 50%, rgba(153, 27, 27, 0.1) 80%, transparent 100%)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
