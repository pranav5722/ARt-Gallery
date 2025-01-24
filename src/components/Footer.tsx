import { Link } from 'react-router-dom';
import { Palette, Mail, Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold text-white">ARt Gallery</span>
            </div>
            <p className="text-sm">
              Experience art in a new dimension through augmented reality.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/gallery" className="hover:text-indigo-400">Gallery</Link></li>
              <li><Link to="/upload" className="hover:text-indigo-400">Submit Art</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2 hover:text-indigo-400">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2"/>
                <a href="mailto:pranavdixit5722@gmail.com">pranavdixit5722@gmail.com</a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.github.com/pranav5722" className="hover:text-indigo-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/pranav-dixit-89005a225/" className="hover:text-indigo-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/mw_pranav/" className="hover:text-indigo-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ARt Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;