import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import TransitionLink from "../components/TransitionLink";
import FadeTransition from "../transitions/FadeTransition";
import CircleRevealTransition from "../transitions/CircleRevealTransition";
import SlideWipeTransition from "../transitions/SlideWipeTransition";
import CatSlideTransition from "../transitions/CatSlideTransition";

export default function Layout() {
  const duration = 1000;
  const [isExit, setIsExit] = useState(false);

  const handleBeforeNavigate = () =>
    new Promise((resolve) => {
      setIsExit(true);
      setTimeout(() => {
        console.log("Transition started");
        setIsExit(false);
        resolve();
      }, duration);
    });

  // const handleMenuClick = (e) => {
  // คำนวณจุดกึ่งกลางของ element ที่คลิก
  // const rect = e.currentTarget.getBoundingClientRect();
  // mousePosRef.current = {
  //   x: rect.left + rect.width / 2 + window.scrollX,
  //   y: rect.top + rect.height / 2 + window.scrollY,
  // };
  // };

  const MenuItem = ({ to, label }) => (
    <>
      <TransitionLink
        to={to}
        className="hover:underline"
        onBeforeNavigate={handleBeforeNavigate}
        // onClick={handleMenuClick}
      >
        {label}
      </TransitionLink>
      &nbsp;|&nbsp;
    </>
  );

  return (
    <>
      <div className="w-full bg-white shadow">
        <nav className="container mx-auto flex gap-6 py-4 px-4">
          <MenuItem to="/" label="Home" />
          <MenuItem to="/parallax" label="Parallax" />
          <MenuItem to="/ball-path" label="Ball Path" />
          <MenuItem to="/scroll-observer" label="Scroll Observer" />
          <MenuItem to="/target-position" label="Target Position" />
          <MenuItem to="/anime-vs-motion" label="Anime vs Motion" />
          <MenuItem to="/text" label="Text Animation" />

          {/* <TransitionLink
            to="/"
            className="hover:underline"
            onBeforeNavigate={handleBeforeNavigate}
          >
            Home
          </TransitionLink>{" "} */}

          {/* <TransitionLink
            to="/parallax"
            className="  hover:underline"
            onBeforeNavigate={handleBeforeNavigate}
          >
            Parallax
          </TransitionLink>{" "}
          |
          <TransitionLink
            to="/ball-path"
            className="hover:underline"
            onBeforeNavigate={handleBeforeNavigate}
          >
            Ball Path
          </TransitionLink>{" "}
          |
          <TransitionLink
            to="/scroll-observer"
            className="hover:underline"
            onBeforeNavigate={handleBeforeNavigate}
          >
            Scroll Observer
          </TransitionLink>{" "}
          |
          <TransitionLink
            to="/target-position"
            className="hover:underline"
            onBeforeNavigate={handleBeforeNavigate}
          >
            Target Position
          </TransitionLink>{" "}
          |
          <TransitionLink
            to="/anime-vs-motion"
            className="hover:underline"
            onBeforeNavigate={handleBeforeNavigate}
          >
            Anime vs Motion
          </TransitionLink>{" "}
          |
          <TransitionLink
            to="/text"
            className="hover:underline"
            onBeforeNavigate={handleBeforeNavigate}
          >
            Anime vs Motion
          </TransitionLink> */}
        </nav>
      </div>
      <main>
        <CatSlideTransition duration={duration} isExit={isExit}>
          <Outlet />
        </CatSlideTransition>
      </main>
    </>
  );
}
