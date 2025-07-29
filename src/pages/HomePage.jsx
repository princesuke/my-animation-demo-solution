import FadeSlideDemo from "../components/FadeSlideDemo";
import StaggerDemo from "../components/StaggerDemo";
import ScaleRotateDemo from "../components/ScaleRotateDemo";
import TimelineDemo from "../components/TimelineDemo";
import DragDemo from "../components/DragDemo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-center">Demos</h1>
      <FadeSlideDemo />
      <StaggerDemo />
      <ScaleRotateDemo />
      <TimelineDemo />
      <DragDemo />
    </div>
  );
}
