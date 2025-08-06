import { animate, stagger, text } from "animejs";
// import { useEffect } from "react";

export default function TextAnimePage() {
  let player;
  // useEffect(() => {

  function handleClick() {
    if (player) {
      player.play(); // Pause if already playing
      return;
    }

    const { chars } = text.split("p", {
      // words: { wrap: "clip" },
      // chars: { wrap: false },
      // class: "split-word",
      // includeSpaces: true,
      chars: true,
    });

    player = animate(chars, {
      // y: ["0rem", "-1rem", "0rem"],
      y: ["0px", "-10px", "0px"],
      loop: true,
      delay: stagger(100),
    });
  }

  // return () => {
  // Clean up animation
  // play.pause();
  // play.seek(play.duration); // jump to end
  // };

  // const ps = document.querySelectorAll("p");
  // ps.forEach((p) => {
  //   const { chars } = text.split(p, {
  //     chars: true,
  //   });
  //   animate(chars, {
  //     y: ["0px", "-10px", "0px"],
  //     loop: true,
  //     delay: stagger(100),
  //   });
  // });
  // animate(chars, {
  // }, []);

  return (
    <div className="min-h-screen  p-10">
      <h2 className="text-2xl font-bold text-center">class</h2>
      {/* <p className="split-char">Aaaaapssddddpasdsdpsdsdsdsd</p> */}
      <p>Aaaaaps sddddpa</p>

      <p>sdsdpsdsdsdsd</p>
      <div className="flex gap-2 mt-4">
        <button
          className="bg-gray-400 p-2 rounded cursor-pointer"
          onClick={() => handleClick()}
        >
          play
        </button>
        <button
          className="bg-gray-400 p-2 rounded cursor-pointer"
          onClick={() => player.pause()}
        >
          stop
        </button>
      </div>
    </div>
  );
}
