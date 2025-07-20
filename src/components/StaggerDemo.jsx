import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function StaggerDemo() {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleStagger = () => {
    animate(refs.map((r) => r.current).filter(Boolean), {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(120),
      duration: 600,
      easing: "easeOutCubic",
    });
  };

  useEffect(() => {
    animate(".box", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(120),
      duration: 600,
      easing: "easeOutCubic",
      loop: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {refs.map((ref, i) => (
          <div
            ref={ref}
            key={i}
            className="w-10 h-10 bg-pink-400 rounded-full"
            style={{ opacity: 0, transform: "translateY(40px)" }}
          />
        ))}
      </div>
      <button
        className="bg-pink-600 px-3 py-1 rounded text-white"
        onClick={handleStagger}
      >
        Stagger Animate
      </button>

      <div className="flex gap-2 mt-2">
        <div className="box w-4 h-4 bg-amber-300"></div>
        <div className="box w-4 h-4 bg-amber-300"></div>
        <div className="box w-4 h-4 bg-amber-300"></div>
      </div>
    </div>
  );
}
