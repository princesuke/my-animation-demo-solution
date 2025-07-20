import { useRef } from "react";
import { animate } from "animejs";

export default function FadeSlideDemo() {
  const ref = useRef(null);

  const handleAnimate = () => {
    animate(ref.current, {
      opacity: [0, 1],
      translateY: [-40, 0],
      duration: 800,
      easing: "easeOutExpo",
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={ref}
        className="w-40 h-16 bg-blue-400 text-white flex items-center justify-center rounded"
      >
        Fade & Slide
      </div>
      <button
        className="bg-blue-700 px-3 py-1 rounded text-white"
        onClick={handleAnimate}
      >
        Animate
      </button>
    </div>
  );
}
