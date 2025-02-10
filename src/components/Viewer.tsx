import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ImageView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  // Find the artwork based on the ID
  const artwork = [...recentUploads, ...recommendations].find(
    (art) => art.id === Number(id)
  );

  if (!artwork) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Artwork not found</h2>
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/gallery')}
          className="inline-flex items-center px-4 py-2 mb-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Gallery
        </button>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img
            src={artwork.image}
            alt="Artwork"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageView;