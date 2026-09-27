import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            {profile.shortName}
          </span>

          <span className="brand-name">
            {profile.name}
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="nav-external"
          >
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="nav-external"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;