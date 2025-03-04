function ChessBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-purple-100 opacity-40 blur-3xl"></div>
      </div>
      
      {/* Chess pattern with better visibility */}
      <div className="absolute inset-0 opacity-10 z-1">
        <div className="w-full h-full grid grid-cols-16 grid-rows-16">
          {[...Array(256)].map((_, i) => {
            const row = Math.floor(i / 16);
            const col = i % 16;
            const isLight = (row + col) % 2 === 0;
            return (
              <div 
                key={i} 
                className={`${isLight ? 'bg-white' : 'bg-gray-800'} transition-opacity duration-1000`}
                style={{
                  opacity: isLight ? 0.5 : 0.15,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChessBackground;
