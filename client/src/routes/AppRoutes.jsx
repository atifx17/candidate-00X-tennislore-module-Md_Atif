import { Routes, Route } from 'react-router-dom';
import SubmitStory from '../pages/SubmitStory';
import BoostSuccess from '../pages/BoostSuccess';
import BoostFailed from '../pages/BoostFailed';
import StoryPage from '../pages/StoryPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/submit-story" element={<SubmitStory />} />
      <Route path="/boost-success" element={<BoostSuccess />} />
      <Route path="/boost-failed" element={<BoostFailed />} />
      <Route path="/stories/:id" element={<StoryPage />} />
    </Routes>
  );
}
