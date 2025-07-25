import { useEffect } from "react";
import anime from "animejs";

export default function ScrollObserver() {
  useEffect(() => {
    anime({
      targets: ".box-scroll",
      translateX: "12rem",
      rotate: "1turn",
      delay: anime.stagger(100, { from: "last" }),
      easing: "linear",
      autoplay: anime.onScroll({
        container: ".scroll-container",
        enter: "bottom-=60 top",
        leave: "top+=60 bottom",
        sync: "inOutCirc",
        debug: false,
      }),
    });
  }, []);

  return (
    <div
      className="scroll-container"
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
        <div
          className="box-scroll"
          style={{
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "#a5b4fc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          A
        </div>
        <div
          className="box-scroll"
          style={{
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "#6ee7b7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          B
        </div>
        <div
          className="box-scroll"
          style={{
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "#facc15",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          C
        </div>
      </div>
      <div style={{ height: 400 }} />
      <div style={{ textAlign: "center", color: "#94a3b8", fontSize: 20 }}>
        Scroll up & down to see the boxes animate.
      </div>
    </div>
  );
}
