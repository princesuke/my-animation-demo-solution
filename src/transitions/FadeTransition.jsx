import { useRef, useEffect } from "react";
import { animate } from "animejs";

export default function FadeTransition({
  isExit = true,
  duration = 600,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof isExit === "boolean") {
      if (!isExit) {
        animate(ref.current, {
          opacity: [0, 1],
          duration,
          easing: "easeInOutQuad",
        });
      } else {
        animate(ref.current, {
          opacity: [1, 0],
          duration,
          easing: "easeInOutQuad",
        });
      }
    }
  }, [isExit, duration]);

  return <div ref={ref}>{children}</div>;
}
