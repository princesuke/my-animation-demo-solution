import { useRef, useState } from "react";
import { animate } from "animejs";
import { motion } from "motion/react";

// https://animejs.com/documentation/animation/tween-parameters/ease/

export default function AnimeBox() {
  const boxRef = useRef(null);

  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    // animate(boxRef.current, {
    //   translateX: 150,
    //   rotate: "1turn",
    //   scale: 1.2,
    //   backgroundColor: "#fd79a8",
    //   duration: 1000,
    //   ease: "easeInOutQuad",
    // });
    animate(
      ".box",
      toggled
        ? {
            translateX: 0,
            rotate: "0turn",
            scale: 1,
            backgroundColor: "#74b9ff",
            duration: 1000,
            ease: "inOut",
            // delay: stagger(300),
          }
        : {
            translateX: 150,
            rotate: "1turn",
            scale: 1.2,
            backgroundColor: "#fd79a8",
            duration: 1000,
            ease: "inOut",
            // delay: stagger(300),
          }
    );
    setToggled(!toggled);

    // animate(".box", {
    //   opacity: [0, 1],
    //   translateY: [40, 0],
    //   delay: stagger(120),
    //   duration: 600,
    //   ease: "easeOutCubic",
    //   loop: true,
    // });
  };

  return (
    <div className="px-5">
      <button
        className="bg-blue-700 px-3 py-1 text-white rounded-sm cursor-pointer"
        onClick={handleClick}
        style={{ marginBottom: "1rem" }}
      >
        Animate with Anime.js
      </button>
      <div
        ref={boxRef}
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#74b9ff",
          borderRadius: "12px",
        }}
      ></div>

      {/* <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#74b9ff",
          borderRadius: "12px",
        }}
      ></div> */}
    </div>
  );
}
