import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Education", "/education"],
  ["Certifications", "/certifications"],
  ["Contact", "/contact"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-slate-300 font-medium">
          {links.map(([label, path]) => (
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

        {/* Desktop Resume */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-block px-4 py-2 rounded-md bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <ul className="flex flex-col px-6 py-4 gap-4 text-slate-300 font-medium">
            {links.map(([label, path]) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}
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

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download
              className="mt-2 inline-block text-center px-4 py-2 rounded-md bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300 transition"
            >
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
