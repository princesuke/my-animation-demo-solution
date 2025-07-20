import { useRef, useEffect } from "react";
import { createScope, createDraggable } from "animejs";

export default function DragDemo() {
  const root = useRef(null);
  const conner1 = useRef(null);
  const conner2 = useRef(null);
  const conner3 = useRef(null);
  const conner4 = useRef(null);

  useEffect(() => {
    // const parentRect = root.current.getBoundingClientRect();
    // const x1 = conner1.current.getBoundingClientRect().left - parentRect.left;
    // const y1 = conner1.current.getBoundingClientRect().top - parentRect.top;
    // const x2 = conner2.current.getBoundingClientRect().left - parentRect.left;
    // const y2 = conner2.current.getBoundingClientRect().top - parentRect.top;

    // console.log("x1:", x1, "y1:", y1, "x2:", x2, "y2:", y2);

    const scope = createScope({ root }).add(() => {
      createDraggable(".drag-star", {
        releaseEase: 400,
        container: root.current,
        // x: { snap: [-800, 0, 800] },
        // y: { snap: [200, 0, -200] },
      });
    });
    return () => scope.revert();
  }, []);

  return (
    <div
      ref={root}
      className="relative flex flex-col items-center gap-4 w-200 h-50 bg-amber-200 m-auto"
      style={{ width: 400, height: 300 }}
    >
      {/* 4 มุม */}
      <div
        ref={conner1}
        className="corner-tl absolute w-5 h-5 bg-red-500"
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={conner2}
        className="corner-tr absolute w-5 h-5 bg-red-500"
        style={{ right: 0, top: 0 }}
      />
      <div
        ref={conner3}
        className="corner-br absolute w-5 h-5 bg-red-500"
        style={{ right: 0, bottom: 0 }}
      />
      <div
        ref={conner4}
        className="corner-bl absolute w-5 h-5 bg-red-500"
        style={{ left: 0, bottom: 0 }}
      />
      <div className="drag-star w-20 h-20 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full flex items-center justify-center text-3xl cursor-grab select-none shadow-lg">
        ⭐
      </div>
      <p className="text-gray-600 text-sm">ลากแล้วปล่อยได้เลย</p>
    </div>
  );
}
