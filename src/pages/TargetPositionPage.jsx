import { useRef } from "react";
import { animate, svg } from "animejs";

export default function TargetPositionPage() {
  const boxRef = useRef(null);
  const targetRef = useRef(null);
  const pathRef = useRef(null);

  const handleAnimate = () => {
    const box = boxRef.current;
    const target = targetRef.current;
    const path = pathRef.current;

    if (!box || !target || !path) return;

    const boxRect = box.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    // const deltaX = targetRect.left - boxRect.left;
    // const deltaY = targetRect.top - boxRect.top;

    const x1 = targetRect.left - boxRect.left + targetRect.width / 2;
    const y1 = targetRect.top - boxRect.top + targetRect.height / 2;

    const cx = (0 + x1) / 2;
    const cy = Math.min(0, y1) - 150;

    const d = `M0,0 Q${cx},${cy} ${x1},${y1}`;
    path.setAttribute("d", d);

    animate(box, {
      //   translateX: deltaX,
      //   translateY: deltaY,
      opacity: 0,
      duration: 1000,
      //   ease: "easeInOutQuad",
      ease: "out(0.3)",
      ...svg.createMotionPath(path),
      //   onBegin: () => {
      //     box.style.transform = "translate(0px, 0px)";
      //   },
    }).then(() => {
      //   alert("Animation completed!");
      //   box.style.left = "100px";
      //   box.style.top = "100px";
      setTimeout(() => {
        box.style.opacity = "1";
        box.style.transform = "";
      }, 300); // Reset after animation
    });
  };

  //   https://animejs.com/documentation/web-animation-api/api-differences-with-native-waapi/finished

  return (
    <div className="relative h-screen p-8 bg-gray-100">
      <button
        onClick={handleAnimate}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded mb-6"
      >
        Move to Target
      </button>

      <div
        ref={targetRef}
        className="w-20 h-20 border-2 border-dashed border-gray-400 bg-white text-gray-600 flex items-center justify-center absolute font-semibold"
        style={{ top: "300px", left: "400px" }}
      >
        Target
      </div>

      {/* SVG PATH OVERLAY */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <path ref={pathRef} fill="none" stroke="#3b82f6" strokeWidth="0" />
        {/* <path
          ref={pathRef}
          id="my-path"
          d="M0,0 Q286,32 440,240"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="4"
        /> */}
      </svg>

      <div ref={boxRef} className="w-16 h-16 bg-blue-500 rounded absolute" />

      {/* M132,132 → จุดเริ่มตรงกับ center ของกล่อง box

    Q286,32 → จุดควบคุม (กลางอ้อมสูง)

    440,340 → center ของกล่อง target */}

      {/* TARGET */}

      {/* <div
        ref={boxRef}
        className="w-16 h-16 bg-blue-500 rounded absolute"
        // style={{ top: "100px", left: "100px" }}
        // style={{
        //   top: 0,
        //   left: 0,
        //   //   transform: "translate(100px, 100px)", // ตรงกับ M132,132
        // }}
      /> */}
    </div>
  );
}
