import { useRef, useEffect } from "react";
import { animate } from "animejs";

/**
 * SlideWipeTransition
 * - แถบดำวิ่งจากซ้ายไปขวา (ปิดจอ) แล้วเปิดจอ (ขวาไปซ้าย)
 *
 * Props:
 * - isExit: true = ปิดจอ (slide in), false = เปิดจอ (slide out)
 * - duration: ms
 * - color: สี overlay (default: #111)
 * - children: เนื้อหาด้านใน
 */
export default function SlideWipeTransition({
  isExit = true,
  duration = 600,
  color = "#111",
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.background = color;
    el.style.transition = "none";
    el.style.pointerEvents = "none";
    if (isExit) {
      // slide in: left -100vw -> 0
      el.style.transform = "translateX(-100vw)";
      animate(el, {
        translateX: ["-100vw", "0vw"],
        // x: ["100%", "0"],
        duration,
        ease: "inQuad",
      });
    } else {
      // slide out: 0 -> 100vw
      el.style.transform = "translateX(0vw)";
      animate(el, {
        translateX: ["0vw", "100vw"],
        // x: ["0", "100%"],
        duration,
        ease: "inQuad",
      });
    }
  }, [isExit, duration, color]);

  return (
    <>
      <div
        ref={ref}
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{ background: color }}
      ></div>
      {children}
    </>
  );
}
