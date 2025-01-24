import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ARViewer from '../components/ARViewer';

const ARView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
          <ARViewer imageUrl={artwork.image} />
        </div>
      </div>
    </div>
  );
};

// Import the artwork data
const recentUploads = [
  { id: 1, image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800" },
  // ... (rest of the recent uploads array)
];

const recommendations = [
  { id: 21, image: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&q=80&w=800" },
  // ... (rest of the recommendations array)
];

export default ARView;