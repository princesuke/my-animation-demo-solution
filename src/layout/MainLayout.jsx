import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import TransitionLink from "../components/TransitionLink";
import FadeTransition from "../transitions/FadeTransition";

export default function Layout() {
  const duration = 500;
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

  return (
    <>
      <div className="w-full bg-white shadow">
        <nav className="container mx-auto flex gap-6 py-4 px-4">
          <TransitionLink
            to="/"
            className="hover:underline"
            onBeforeNavigate={handleBeforeNavigate}
          >
            Home
          </TransitionLink>{" "}
          |
          <TransitionLink
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
          </TransitionLink>
        </nav>
      </div>
      <main>
        <FadeTransition duration={duration} isExit={isExit}>
          <Outlet />
        </FadeTransition>
      </main>
    </>
  );
}
