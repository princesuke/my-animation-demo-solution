import { useEffect } from "react";
import { animate, stagger, onScroll } from "animejs";

export default function ScrollObserver() {
  // const scrollRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    /* โหลดแอนิเมชันเมื่อคอมโพเนนต์ mounted */
    animate(".box-scroll", {
      x: "12rem", // v4 ใช้ x / y แทน translateX/translateY
      rotate: "1turn",
      delay: stagger(100, { from: "last" }),
      ease: "linear", // v4 เปลี่ยนชื่อจาก easing → ease
      autoplay: onScroll({ sync: "inOutCirc" }), // ปิด autoplay เพื่อรอการ scroll
      // autoplay: onScroll({
      //   // container: ".scroll-container",
      //   // container: scrollRef.current,
      //   // enter: "bottom-=60 top",
      //   // leave: "top+=60 bottom",
      //   sync: "inOutCirc",
      //   debug: false,
      // }),
    });
  }, []);

  return (
    <div
      className="scroll-container bg-pink-300"
      style={{
        minHeight: "160vh",
        overflowY: "scroll",
        background: "#f8fafc",
        padding: "48px 0",
      }}
    >
      <div style={{ height: 200 }} />

      <div
        className="box-grid"
        style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          alignItems: "center",
          minHeight: 240,
        }}
      >
        {["#a5b4fc", "#6ee7b7", "#facc15"].map((bg, i) => (
          <div
            key={i}
            className="box-scroll"
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            {"ABC"[i]}
          </div>
        ))}
      </div>

      <div style={{ height: 400 }} />
      {/* <div style={{ textAlign: "center", color: "#94a3b8", fontSize: 20 }}>
        Scroll up & down to see the boxes animate.
      </div> */}
    </div>
  );
}
