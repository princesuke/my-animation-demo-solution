import { useRef, useEffect } from "react";
import { animate } from "animejs";

/**
 * CircleRevealTransition
 * - กดปุ่ม/trigger แล้วมีวงกลมดำทึบขยายจากจุดที่กดจนเต็มจอ (ปิดจอ)
 * - เมื่อเปลี่ยนหน้า วงกลมขยายต่อจนจางหาย (เปิดจอ)
 *
 * Props:
 * - trigger: {x, y} ตำแหน่งจุดเริ่มต้น (เช่น event.clientX, event.clientY)
 * - isExit: true = ปิดจอ, false = เปิดจอ
 * - duration: ms
 * - color: สี overlay (default: #111)
 * - children: เนื้อหาด้านใน
 */
export default function CircleRevealTransition({
  trigger = { x: 0, y: 0 },
  isExit = true,
  duration = 700,
  color = "#111",
  children,
}) {
  const ref = useRef(null);
  // คำนวณ maxR ทุกครั้ง
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const dx = Math.max(trigger.x, vw - trigger.x);
  const dy = Math.max(trigger.y, vh - trigger.y);
  const maxR = Math.sqrt(dx * dx + dy * dy);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.background = color;
    el.style.transition = "none";
    el.style.pointerEvents = "none";

    if (isExit) {
      el.style.clipPath = `circle(0px at ${trigger.x}px ${trigger.y}px)`;
      animate(el, {
        clipPath: [
          `circle(0px at ${trigger.x}px ${trigger.y}px)`,
          `circle(${maxR}px at ${trigger.x}px ${trigger.y}px)`,
        ],
        duration,
        easing: "easeInOutQuad",
      });
    } else {
      el.style.clipPath = `circle(${maxR}px at ${trigger.x}px ${trigger.y}px)`;
      animate(el, {
        clipPath: [
          `circle(${maxR}px at ${trigger.x}px ${trigger.y}px)`,
          `circle(0px at ${trigger.x}px ${trigger.y}px)`,
        ],
        duration,
        easing: "easeInOutQuad",
      });
    }
  }, [isExit, duration, trigger.x, trigger.y, color, maxR]);

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
