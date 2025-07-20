import { useRef, useEffect } from "react";
import { animate } from "animejs";

export default function FadeTransition({ children, visible, onExited }) {
  const ref = useRef(null);
  //   const firstRender = useRef(true);

  useEffect(() => {
    // if (firstRender.current) {
    //   // Set initial opacity based on visible
    //   if (ref.current) {
    //     ref.current.style.opacity = visible ? 1 : 0;
    //   }
    //   firstRender.current = false;
    //   return;
    // }
    // if (visible) {
    animate(ref.current, {
      opacity: [0, 1],
      duration: 600,
      easing: "easeInOutQuad",
    });
    // } else {
    //   animate(ref.current, {
    //     opacity: [1, 0],
    //     duration: 500,
    //     easing: "easeInOutQuad",
    //     // complete:,
    //   });
    // }
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
