import axios from 'axios';

export default function BoostButton({ storyId, email }) {
  const handleBoost = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE}/create-boost-session`, {
        storyId,
        amount: 200,
        email,
      });
      window.location.href = res.data.url;
    } catch (err) {
      console.error(err);
      alert('❌ Boost failed. Try again.');
    }
  };

  return (
    <button
      onClick={handleBoost}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Boost This Tale
    </button>
  );
}
