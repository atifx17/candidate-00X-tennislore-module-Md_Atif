import { useState } from 'react';
import axios from 'axios';

export default function StoryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    story: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE}/api/story-submit`, formData);
      setMessage('✅ Story submitted!');
      setFormData({ name: '', email: '', date: '', story: '' });
    } catch (err) {
      console.error(err);
      setMessage('❌ Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-green-700 text-center">Submit Your Tennis Story</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="story"
          placeholder="Write your tennis memory..."
          value={formData.story}
          onChange={handleChange}
          className="w-full border p-2 rounded h-28"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Submit
        </button>

        {message && (
          <p className="text-center mt-2 text-sm text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}
