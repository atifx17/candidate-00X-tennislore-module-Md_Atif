import { useParams } from 'react-router-dom';
import BoostButton from '../components/BoostButton';
import VoteWidget from '../components/VoteWidget';

export default function StoryPage() {
  const { id } = useParams();
  const email = "user@example.com";

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-xl font-bold text-green-800 mb-4">Story #{id}</h2>
      {/* Placeholder story text */}
      <p className="text-gray-700 mb-4">A thrilling tale of match-point magic and court-side memories...</p>

      <VoteWidget storyId={id} email={email} />
      <div className="mt-4">
        <BoostButton storyId={id} email={email} />
      </div>
    </div>
  );
}
