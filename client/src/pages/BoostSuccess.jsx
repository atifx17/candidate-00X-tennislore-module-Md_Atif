import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function BoostSuccess() {
  const [status, setStatus] = useState('Checking...');
  const [params] = useSearchParams();

  useEffect(() => {
    const storyId = params.get('storyId');
    const email = params.get('email');

    if (storyId && email) {
      axios.get(`${import.meta.env.VITE_API_BASE}/boost-status`, {
        params: { storyId, email }
      })
        .then(res => {
          if (res.data.boosted) {
            setStatus('✅ Boost successful! Thank you.');
          } else {
            setStatus('❌ Boost failed to register. Please contact support.');
          }
        })
        .catch(() => setStatus('❌ Server error while verifying boost.'));
    } else {
      setStatus('❌ Missing boost info in URL.');
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-xl font-bold text-green-700 mb-2">Boost Status</h2>
        <p>{status}</p>
      </div>
    </div>
  );
}
