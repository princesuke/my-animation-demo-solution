import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="w-full bg-white shadow">
        <nav className="container mx-auto flex gap-6 py-4 px-4">
          <Link to="/" className="font-bold text-blue-700 hover:underline">
            Home
          </Link>
          <Link
            to="/parallax"
            className="font-bold text-purple-700 hover:underline"
          >
            Parallax Demo
          </Link>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
