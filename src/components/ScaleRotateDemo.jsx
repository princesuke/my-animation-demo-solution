import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function ScaleRotateDemo() {
  const ref = useRef(null);

  const handleScaleRotate = () => {
    animate(ref.current, {
      scale: [1, 1.3, 1],
      rotate: [0, 180, 0],
      // ease: "linear",
      // loop: true,
    });
  };

  useEffect(() => {
    animate(".square", {
      keyframes: [
        { y: "-2.5rem", duration: 400 },
        { x: "17rem", rotate: 180, scale: 0.5 },
        { y: "2.5rem" },
        { x: -5, rotate: 360, scale: 1 },
        { x: 0, y: 0, duration: 400 },
      ],
      duration: 4000,
      playbackEase: "inOut(3)",
      loop: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        ref={ref}
        className="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl font-bold"
      >
        ★
      </div>
      <button
        className="bg-yellow-600 px-3 py-1 rounded text-white"
        onClick={handleScaleRotate}
      >
        Scale + Rotate Elastic
      </button>
      <div className="square w-10 h-10 bg-blue-400 my-10"></div>
    </div>
  );
}
