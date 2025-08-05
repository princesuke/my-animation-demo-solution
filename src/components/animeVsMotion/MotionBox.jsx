import { useState } from "react";
import { motion } from "motion/react";

export default function MotionBox() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="px-5">
      <button
        className="bg-blue-700 px-3 py-1 text-white rounded-sm cursor-pointer"
        onClick={() => setAnimate(!animate)}
        style={{ marginBottom: "1rem" }}
      >
        Animate with Motion One
      </button>
      <motion.div
        animate={
          animate
            ? {
                x: 150,
                rotate: 360,
                scale: 1.2,
                backgroundColor: "#fd79a8",
              }
            : {
                x: 0,
                rotate: 0,
                scale: 1,
                backgroundColor: "#74b9ff",
              }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
