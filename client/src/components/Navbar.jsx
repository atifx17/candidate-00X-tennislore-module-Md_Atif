import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-green-700 text-white p-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">🎾 TennisLore</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/submit-story" className="hover:underline">Submit Story</Link>
        <Link to="/stories" className="hover:underline">View All Stories</Link>
      </nav>
    </div>
  );
}
