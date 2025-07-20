import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ParallaxDemo from "./pages/ParallaxDemo";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="parallax" element={<ParallaxDemo />} />
          {/* เพิ่ม Route อื่นๆ ที่นี่ */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
