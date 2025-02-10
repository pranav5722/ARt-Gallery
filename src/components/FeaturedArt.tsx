import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import { motion } from 'framer-motion';

const featuredArtworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    image: img1,
    description: "A vibrant exploration of color and form"
  },
  {
    id: 2,
    title: "Urban Dreams",
    image: img2,
    description: "Contemporary urban landscape interpretation"
  },
  {
    id: 3,
    title: "Nature's Whisper",
    image: img3,
    description: "Organic forms in abstract composition"
  }
];

const FeaturedArt = () => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Featured Artworks
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Discover our latest curated collection of contemporary art
          </p>
        </motion.div>

        {/* Artworks Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="bg-gray-800 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Image and Title */}
              <div className="relative">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold text-white">{artwork.title}</h3>
                </div>
              </div>

              {/* Description and Button */}
              <div className="p-4">
                <p className="text-gray-400">{artwork.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Link
                    to={`/gallery/${artwork.id}`}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Art
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArt;
