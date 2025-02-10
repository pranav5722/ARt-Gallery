import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedArt from '../components/FeaturedArt';
import img from '../assets/bg.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-16 bg-gray-900">
      {/* Hero Section */}
      <motion.div
        className="relative h-[80vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <motion.img
            src={img}
            alt="Gallery"
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience Art in a <span className="text-indigo-400">New Dimension</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-gray-300 max-w-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Step into a world where art transcends traditional boundaries. Our virtual Art gallery
            brings masterpieces to life in your space at your ease.
          </motion.p>
          <motion.div
            className="mt-8 flex space-x-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
            >
              Explore Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/upload"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 transition duration-300"
            >
              Submit Artwork
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Art Section */}
        <FeaturedArt />
    </div>
  );
};

export default Home;
