import { useState, useRef, useEffect } from 'react'
import { Chessboard } from 'react-chessboard'
import './App.css'

function App() {
  const [timeControl, setTimeControl] = useState('5+0')
  const [boardWidth, setBoardWidth] = useState(400)
  const boardContainerRef = useRef(null)
  
  // Adjust board size based on container
  useEffect(() => {
    const resizeBoard = () => {
      if (boardContainerRef.current) {
        const navHeight = 56; // h-14 = 56px
        const controlsHeight = 44; // height of controls + margin
        const safePadding = 32; // safety margin to avoid scroll
        
        // Calculate available height and width
        const availableHeight = window.innerHeight - navHeight - controlsHeight - safePadding;
        const availableWidth = Math.min(boardContainerRef.current.offsetWidth, window.innerWidth - 16);
        
        // Take the smaller of the two dimensions
        const size = Math.floor(Math.min(availableHeight, availableWidth));
        setBoardWidth(size);
      }
    };
    
    // Initial size
    resizeBoard();
    
    // Resize on window change
    window.addEventListener('resize', resizeBoard);
    return () => window.removeEventListener('resize', resizeBoard);
  }, []);

  // Prevent scrolling on body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md flex items-center h-14 flex-shrink-0">
        <div className="w-full px-4 flex items-center justify-center">
          <div className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Legato Chess Logo" 
              className="h-8 w-auto mr-3" 
            />
            <h1 className="text-2xl font-bold text-gray-800">
              Legato Chess
            </h1>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        {/* Controls */}
        <div className="flex justify-center items-center gap-3 mb-2 px-2">
          <button className="w-28 px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm text-sm font-medium">
            Play
          </button>
          
          <div className="relative">
            <select
              value={timeControl}
              onChange={(e) => setTimeControl(e.target.value)}
              className="w-24 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer appearance-none pr-8"
            >
              <option value="1+0">1 min</option>
              <option value="3+0">3 min</option>
              <option value="5+0">5 min</option>
              <option value="10+0">10 min</option>
              <option value="15+10">15+10</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <button className="w-28 px-4 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-sm text-sm font-medium">
            Seek
          </button>
        </div>
        
        {/* Chessboard Container */}
        <div 
          ref={boardContainerRef} 
          className="flex items-center justify-center px-2"
          style={{ width: '100%' }} 
        >
          <div style={{ width: boardWidth, height: boardWidth }} className="rounded-md shadow-md overflow-hidden">
            <Chessboard 
              id="MainBoard"
              boardWidth={boardWidth}
              position="start"
              customDarkSquareStyle={{ backgroundColor: '#B58863' }}
              customLightSquareStyle={{ backgroundColor: '#F0D9B5' }}
              arePiecesDraggable={false}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
