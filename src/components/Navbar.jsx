import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
  to="/"
  className="text-xl font-bold text-sky-400 hover:text-sky-300 transition"
>
  Aditya Vardhan
</NavLink>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-slate-300 font-medium">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Skills", "/skills"],
            ["Projects", "/projects"],
            ["Experience", "/experience"],
            ["Education", "/education"],
            ["Certifications", "/certifications"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-400"
                    : "hover:text-sky-400 transition"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-block px-4 py-2 rounded-md bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300 transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
