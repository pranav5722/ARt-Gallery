import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Home, Upload, Info, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-20 bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Palette className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">Art Gallery</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-300 hover:text-indigo-400 transition duration-300">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/gallery" className="flex items-center space-x-1 text-gray-300 hover:text-indigo-400 transition duration-300">
              <Palette className="h-5 w-5" />
              <span>Gallery</span>
            </Link>
            <Link to="/upload" className="flex items-center space-x-1 text-gray-300 hover:text-indigo-400 transition duration-300">
              <Upload className="h-5 w-5" />
              <span>Upload</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-gray-300 hover:text-indigo-400 transition duration-300">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-indigo-400 transition duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-indigo-400" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/gallery" className="block px-3 py-2 text-gray-300 hover:text-indigo-400" onClick={closeMenu}>
              Gallery
            </Link>
            <Link to="/upload" className="block px-3 py-2 text-gray-300 hover:text-indigo-400" onClick={closeMenu}>
              Upload
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-indigo-400" onClick={closeMenu}>
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
