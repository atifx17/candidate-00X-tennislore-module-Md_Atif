import { useState, useEffect } from 'react';
import axios from 'axios';

export default function VoteWidget({ storyId, email }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState('');

  // Fetch vote count on load
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE}/story/${storyId}/votes`)
      .then((res) => setVotes(res.data.votes))
      .catch((err) => {
        console.error('Failed to load votes:', err);
        setError('Failed to load votes');
      });
  }, [storyId]);

  const handleVote = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE}/story-vote`, {
        storyId,
        email,
      });
      setVotes((prev) => prev + 1);
      setVoted(true);
    } catch (err) {
      console.error('Voting error:', err);
      setError('❌ Already voted or server error');
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded">
      <p className="text-gray-800 font-semibold">Votes: {votes}</p>
      <button
        className={`mt-2 px-4 py-2 rounded ${
          voted ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
        }`}
        onClick={handleVote}
        disabled={voted}
      >
        {voted ? '✅ Voted' : 'Vote for This Tale'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
