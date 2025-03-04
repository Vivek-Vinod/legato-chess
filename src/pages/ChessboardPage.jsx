import { useState, useRef, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import NavBar from '../components/NavBar';
import ChessBackground from '../components/ChessBackground';

function ChessboardPage() {
  const [boardWidth, setBoardWidth] = useState(400);
  const boardContainerRef = useRef(null);
  
  // Adjust board size based on container
  useEffect(() => {
    const resizeBoard = () => {
      if (boardContainerRef.current) {
        const navHeight = 56; // h-14 = 56px
        const safePadding = 32; // safety margin to avoid scroll
        
        // Calculate available height and width
        const availableHeight = window.innerHeight - navHeight - safePadding;
        const availableWidth = Math.min(boardContainerRef.current.offsetWidth, window.innerWidth - 16);
        
        // Take the smaller of the two dimensions
        const size = Math.floor(Math.min(availableHeight, availableWidth)) - 24; // Subtract for border
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
    <div className="fixed inset-0 flex flex-col">
      {/* Chess-themed background */}
      <ChessBackground />
      
      {/* Navigation Bar */}
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-center overflow-hidden relative z-10">
        {/* Chessboard Container */}
        <div 
          ref={boardContainerRef} 
          className="flex items-center justify-center px-2"
          style={{ width: '100%' }} 
        >
          {/* Restored original border with improved colors */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg shadow-2xl">
            <div style={{ width: boardWidth, height: boardWidth }} className="rounded-md overflow-hidden">
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
        </div>
      </main>
    </div>
  );
}

export default ChessboardPage;
