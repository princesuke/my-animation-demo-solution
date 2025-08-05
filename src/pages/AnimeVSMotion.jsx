import AnimeBox from "../components/animeVsMotion/AnimeBox";
import MotionBox from "../components/animeVsMotion/MotionBox";

export default function AnimeVSMotionPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-center">AnimeVsMotion</h1>
      <AnimeBox />
      <MotionBox />
    </div>
  );
}
