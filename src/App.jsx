import { Routes, Route } from "react-router-dom";

import Opening from "./pages/Opening";
import Story from "./pages/Story";
// import GalleryPage from "./pages/GalleryPage";
// import Gallery from "./pages/Gallery";
import Quiz from "./pages/quiz/Quiz";
import MemoryHub from "./pages/memoryHub/MemoryHub";
import TreasureHunt from "./pages/treasure/TreasureHunt";
import TreasureResult from "./pages/treasure/TreasureResult";
import ScratchPage from "./pages/scratch/ScratchCard";
import WheelPage from "./pages/wheel/Wheel";
import LoveMeter from "./pages/LoveMeter";
import Hug from "./components/hug/Hug";
import EmergencyPage from "./pages/emergency/EmergencyPage";
import WishJarPage from "./pages/wishJar/WishJarPage";
import EffectsPage from "./pages/effects/EffectsPage";
import DailyMemory from "./pages/dailyMemory/DailyMemory";
import HomeLikeMemory from "./pages/homeLikeMemory/HomeLikeMemory";
import FutureBucketList from "./pages/futureBucket/FutureBucketList";
import WhySpecial from "./pages/whySpecial/WhySpecial";
import BrotherAI from "./pages/brotherAI/BrotherAI";
import EasterEgg from "./pages/easterEgg/EasterEgg";
import PromiseWall from "./pages/promiseWall/PromiseWall";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Opening />} />
      <Route path="/story" element={<Story />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/memory-hub" element={<MemoryHub />} />
      <Route path="/treasure" element={<TreasureHunt />} />
      <Route path="/treasure-result" element={<TreasureResult />} />
      <Route path="/scratch" element={<ScratchPage />} />
      <Route path="/wheel" element={<WheelPage />} />
      <Route path="/care-meter" element={<LoveMeter />} />
      <Route path="/hug" element={<Hug />} />
      <Route path="/emergency" element={<EmergencyPage />} />
      <Route path="/wish-jar" element={<WishJarPage />} />
      <Route path="/effects" element={<EffectsPage />} />
      <Route path="/daily-memory" element={<DailyMemory />} />
      <Route path="/home-like-memory" element={<HomeLikeMemory />} />
      <Route path="/future-bucket-list" element={<FutureBucketList />} />
      <Route path="/why-special" element={<WhySpecial />} />
      <Route path="/brother-ai" element={<BrotherAI />} />
      <Route path="/easter-eggs" element={<EasterEgg />} />
      <Route path="/promise-wall" element={<PromiseWall />} />
        {/* <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/gallery" element={<Gallery />} /> */}
    </Routes>
  );
}

export default App;