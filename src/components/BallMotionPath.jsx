import { useEffect, useRef } from "react";
import { animate, svg } from "animejs";

export default function BallMotionPath() {
  const ballRef = useRef();
  const pathId = "myPath";

  useEffect(() => {
    // โค้ดนี้ใช้กับ animejs v4 doc ปัจจุบัน
    animate(ballRef.current, {
      ease: "linear",
      duration: 3000,
      loop: true,
      ...svg.createMotionPath(`#${pathId}`),
    });
  }, []);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <svg
        width="500"
        height="300"
        style={{ background: "#f1f5f9" }}
        viewBox="0 0 500 300"
      >
        <path
          id={pathId}
          d="M50,250 Q250,50 450,250 T850,250"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="4"
        />
        <circle
          ref={ballRef}
          className="car"
          r="16"
          fill="#fb7185"
          stroke="#f43f5e"
          strokeWidth="3"
        />
      </svg>
      <div style={{ marginTop: 24, color: "#475569" }}>
        ลูกบอลจะวิ่งไปตามเส้น Path (SVG Motion Path)
      </div>
    </div>
  );
}
