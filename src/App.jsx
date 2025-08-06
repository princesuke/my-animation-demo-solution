import { BrowserRouter, Routes, Route } from "react-router";
import ParallaxPage from "./pages/ParallaxPage";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import BallPathPage from "./pages/BallPathPage";
import ScrollObserverPage from "./pages/ScrollObserverPage";
import TargetPositionPage from "./pages/TargetPositionPage";
import AnimeVSMotionPage from "./pages/AnimeVSMotionPage";
import TextAnimePage from "./pages/TextAnimePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="parallax" element={<ParallaxPage />} />
          <Route path="ball-path" element={<BallPathPage />} />
          <Route path="scroll-observer" element={<ScrollObserverPage />} />
          <Route path="target-position" element={<TargetPositionPage />} />
          <Route path="anime-vs-motion" element={<AnimeVSMotionPage />} />
          <Route path="text" element={<TextAnimePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
