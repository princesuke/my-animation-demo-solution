import { useEffect, useRef } from "react";
import { animate } from "animejs";
import FadeTransition from "../transitions/FadeTransition";

export default function ParallaxDemo() {
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      animate(layer1.current, {
        translateX: x * 30,
        translateY: y * 30,
        duration: 400,
        easing: "easeOutQuad",
      });
      animate(layer2.current, {
        translateX: x * 60,
        translateY: y * 60,
        duration: 400,
        easing: "easeOutQuad",
      });
      animate(layer3.current, {
        translateX: x * 90,
        translateY: y * 90,
        duration: 400,
        easing: "easeOutQuad",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // <FadeTransition>
    <div className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 overflow-hidden">
      <div
        ref={layer3}
        className="absolute w-80 h-80 bg-purple-300 rounded-full opacity-60"
        style={{ zIndex: 1, top: 60, left: 60 }}
      />
      <div
        ref={layer2}
        className="absolute w-60 h-60 bg-blue-300 rounded-full opacity-70"
        style={{ zIndex: 2, top: 120, left: 220 }}
      />
      <div
        ref={layer1}
        className="absolute w-40 h-40 bg-pink-300 rounded-full opacity-80"
        style={{ zIndex: 3, top: 180, left: 120 }}
      />
      <div className="relative z-10 text-3xl font-bold text-gray-700">
        Parallax Demo
      </div>
    </div>
    // </FadeTransition>
  );
}
