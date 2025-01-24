import { Eye, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const recentUploads = [
    { id: 1, image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800" },
  
    { id: 3, image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&q=80&w=800" },
    { id: 4, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800" },
    { id: 5, image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&q=80&w=800" },
    
    { id: 7, image: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&q=80&w=800" },
    { id: 8, image: "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?auto=format&fit=crop&q=80&w=800" },
    
    { id: 11, image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=800" },
    { id: 12, image: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?auto=format&fit=crop&q=80&w=800" },
    { id: 13, image: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&q=80&w=800" },
    { id: 14, image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&q=80&w=800" },
    { id: 15, image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80&w=800" },
    
    { id: 17, image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=800" },
    { id: 18, image: "https://images.unsplash.com/photo-1580136607993-fd598cf5c4f5?auto=format&fit=crop&q=80&w=800" },
    { id: 19, image: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?auto=format&fit=crop&q=80&w=800" }
];

const recommendations = [
    { id: 20, image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=800" },
    { id: 21, image: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&q=80&w=800" },
    { id: 22, image: "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?auto=format&fit=crop&q=80&w=800" },
    { id: 23, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800" },
    { id: 24, image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&q=80&w=800" },
    { id: 25, image: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&q=80&w=800" },
    { id: 26, image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&q=80&w=800" },
   
    { id: 28, image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800" },
    
    { id: 32, image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=800" },
    { id: 33, image: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?auto=format&fit=crop&q=80&w=800" },
    { id: 34, image: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&q=80&w=800" },
    { id: 35, image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&q=80&w=800" },
    { id: 36, image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80&w=800" },
   
    { id: 38, image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=800" },
    { id: 39, image: "https://images.unsplash.com/photo-1580136607993-fd598cf5c4f5?auto=format&fit=crop&q=80&w=800" },
    { id: 40, image: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?auto=format&fit=crop&q=80&w=800" }
  
];

const ArtworkGrid = ({ artworks }: { artworks: typeof recentUploads }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
    {artworks.map((artwork) => (
      <div 
        key={artwork.id} 
        className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div className="relative aspect-[4/5]">
          <img
            src={artwork.image}
            alt={`Artwork ${artwork.id}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <Link
                to={`/gallery/${artwork.id}/ar`}
                className="w-full flex items-center justify-center px-2 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300 text-sm"
              >
                <Eye className="mr-1 h-3 w-3" />
                View in AR
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Gallery = () => {
  return (
    <div className="pt-20 pb-16 bg-gray-900 min-h-screen">
      <div className="max-w-[95%] mx-auto px-2 sm:px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-3">Gallery</h1>
          <p className="text-gray-400 text-base">Explore our collection of contemporary artworks in AR</p>
        </div>

        {/* Recent Uploads Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Clock className="h-5 w-5 text-indigo-400 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Recent Uploads</h2>
          </div>
          <ArtworkGrid artworks={recentUploads} />
        </div>

        {/* Recommendations Section */}
        <div>
          <div className="flex items-center mb-6">
            <Sparkles className="h-5 w-5 text-indigo-400 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Recommended for You</h2>
          </div>
          <ArtworkGrid artworks={recommendations} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;