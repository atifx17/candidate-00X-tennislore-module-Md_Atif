import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmitStory from './pages/SubmitStory';
import BoostSuccess from './pages/BoostSuccess';
import BoostFailed from './pages/BoostFailed';
import StoryPage from './pages/StoryPage';
import Home from './pages/Home'; // 👈 Add this
import Profile from './pages/Profile'; // 👈 Add this
import Navbar from './components/Navbar';
import AllStories from './pages/AllStories';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/submit-story" element={<SubmitStory />} />
        <Route path="/boost-success" element={<BoostSuccess />} />
        <Route path="/boost-failed" element={<BoostFailed />} />
        <Route path="/stories/:id" element={<StoryPage />} />
        <Route path="/stories" element={<AllStories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
