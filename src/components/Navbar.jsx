import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600 transition-colors";

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <NavLink to="/" className="flex items-center gap-2 font-semibold text-gray-900">
          <Code2 className="w-5 h-5 text-blue-600" />
          Derrick Dev
        </NavLink>

        <ul className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="sm:hidden text-gray-600"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-4 pb-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                <span className="block py-2">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
