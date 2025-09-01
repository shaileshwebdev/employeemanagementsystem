import { useState } from "react";
import { Menu, X, Users, Sun, Moon } from "lucide-react";
import "./navbar.css";
import { useTheme } from "../context/ThemeContext";
// 👈 apne folder ke hisaab se path adjust karo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Title */}
        <div className="navbar-logo">
          <Users className="icon" />
          <h1>EMS</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-links">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/employee">Employees</a>
          </li>
          <li>
            {/* Theme Toggle Button */}
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="icon" />
              ) : (
                <Sun className="icon" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="icon" /> : <Menu className="icon" />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="/">Dashboard</a>
          <a href="/employee">Employees</a>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="icon" />
            ) : (
              <Sun className="icon" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
