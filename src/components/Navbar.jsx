import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-cyan-400 text-2xl font-bold">
          Sohil.
        </h1>

        <div className="flex gap-8">

          <Link to="home" smooth={true}>
            Home
          </Link>

          <Link to="about" smooth={true}>
            About
          </Link>

          <Link to="skills" smooth={true}>
            Skills
          </Link>

          <Link to="projects" smooth={true}>
            Projects
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;