import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE}/api/stories`)
      .then((res) => setStories(res.data))
      .catch(() => console.error('Failed to load stories'));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">All Tennis Tales</h2>
      {stories.length === 0 ? (
        <p>No stories found.</p>
      ) : (
        <div className="space-y-4">
          {stories.map((story) => (
            <Link to={`/stories/${story._id}`} key={story._id} className="block border border-gray-300 p-4 rounded hover:bg-gray-50">
              <h3 className="text-lg font-semibold text-green-800">{story.name} – {new Date(story.date).toLocaleDateString()}</h3>
              <p className="text-gray-600 line-clamp-2">{story.story}</p>
              <p className="text-sm text-gray-400 mt-1">Votes: {story.votes || 0}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
