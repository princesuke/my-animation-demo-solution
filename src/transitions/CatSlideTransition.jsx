import { useRef, useEffect } from "react";
import { animate } from "animejs";

/**
 * CatSlideTransition
 * - รูปแมววิ่งจากซ้ายไปขวาเต็มจอ (slide)
 *
 * Props:
 * - isExit: true = วิ่งเข้า (slide in), false = วิ่งออก (slide out)
 * - duration: ms
 * - src: รูปแมว (string)
 * - children: เนื้อหาด้านใน (optional)
 */
export default function CatSlideTransition({
  isExit = true,
  duration = 1200,
  src = "/images/nyan-cat-nyan.gif",
  children,
}) {
  const catRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isExit) {
      animate(overlayRef.current, {
        opacity: [1, 0],
        duration,
        ease: "inOut",
      });
    } else {
      animate(overlayRef.current, {
        opacity: [0, 1],
        duration,
        ease: "inOut",
      });

      const cat = catRef.current;
      cat.style.opacity = 1;
      if (!cat) return;
      // cat.style.transition = "none";
      // const vw = window.innerWidth;
      const catWidth = 350;
      animate(cat, {
        translateX: [`-${catWidth}px`, `100vw`],
        duration: duration * 2,
        ease: "inOut",
        onComplete: () => {
          // ซ่อน cat หลัง animation เสร็จ
          cat.style.opacity = 0;
          alert("Meaow( W )/");
          //   cat.style.transform = `translateX(-${catWidth}px)`;
        },
      });
    }
  }, [isExit, duration]);

  return (
    <div className="relative">
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9998] pointer-events-none bg-white opacity-0"
      ></div>

      <img
        ref={catRef}
        src={src}
        alt="cat"
        className="fixed top-1/2 left-0 -translate-y-1/2 z-[9999] pointer-events-none opacity-0"
        style={{ width: 350, height: "auto" }}
      />

      <div>{children}</div>
    </div>
  );
}
