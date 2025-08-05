import { useRef, useState } from "react";
import { animate } from "animejs";

export default function FadeSlideDemo() {
  const ref = useRef(null);
  const [isSlideLeft, setIsSlideLeft] = useState(false);

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
      <div className="h-3"></div>
      <div
        className={`box1 h-3 w-3 bg-amber-500 ${
          isSlideLeft ? "translate-x-[30px] scale-150" : ""
        } transition-all duration-[300ms] ease-in-out`}
      ></div>
      <button
        className="bg-blue-700 px-3 py-1 text-white rounded-sm cursor-pointer"
        onClick={() => setIsSlideLeft(!isSlideLeft)}
      >
        <span className="text-sm">Click to animate box</span>
      </button>
    </div>
  );
}
