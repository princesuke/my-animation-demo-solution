import { BrowserRouter, Routes, Route } from "react-router";
import ParallaxPage from "./pages/ParallaxPage";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import BallPathPage from "./pages/BallPathPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="parallax" element={<ParallaxPage />} />
          <Route path="ball-path" element={<BallPathPage />} />
          {/* เพิ่ม Route อื่นๆ ที่นี่ */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
