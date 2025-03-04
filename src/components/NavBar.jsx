import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white bg-opacity-95 shadow-lg flex items-center h-14 flex-shrink-0 relative z-10">
      <div className="w-full px-4 flex items-center justify-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo.svg" 
            alt="Legato Chess Logo" 
            className="h-9 w-auto mr-3" 
          />
          <h1 className="text-2xl tracking-tight">
            <span className="text-blue-800 font-extrabold">Legato</span>
            <span className="text-gray-800 font-semibold ml-1">Chess</span>
          </h1>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
