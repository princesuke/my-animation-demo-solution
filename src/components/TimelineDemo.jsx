import { useRef } from "react";
import { createTimeline } from "animejs";

export default function TimelineDemo() {
  const refA = useRef(null);
  const refB = useRef(null);

  const timeline = createTimeline({ defaults: { duration: 600 } });

  const handleTimeline = () => {
    timeline.reset();
    timeline
      // 0 - 1 คือ  เริ่มที่ 0ms ถึง 600ms
      .add(refA.current, { x: "5rem", opacity: [0, 1] }, 0)
      .add(refB.current, { y: "-2rem", scale: [1, 1.5] }, 300);
  };

  const handleReset = () => {
    timeline.reset();
  };

  const handleReverse = () => {
    timeline.reverse();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <div
          ref={refA}
          className="w-16 h-16 bg-purple-500 opacity-0 rounded flex items-center justify-center text-white"
        >
          A
        </div>
        <div
          ref={refB}
          className="w-16 h-16 bg-indigo-400 rounded flex items-center justify-center text-white"
        >
          B
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-indigo-600 px-3 py-1 rounded text-white"
          onClick={handleTimeline}
        >
          Play Timeline
        </button>
        <button
          className="bg-gray-400 px-3 py-1 rounded text-white"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="bg-pink-500 px-3 py-1 rounded text-white"
          onClick={handleReverse}
        >
          Reverse
        </button>
      </div>
    </div>
  );
}
