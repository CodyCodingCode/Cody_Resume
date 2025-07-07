// 📄 src/components/Header.jsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }, // We'll add a contact section later
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);

      // Highlight nav item based on scroll position
      const offsets = navItems.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return { id, offsetTop: el.offsetTop };
      }).filter(Boolean);

      const scrollPos = window.scrollY + 80; // offset for navbar height
      let current = null;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollPos >= offsets[i].offsetTop) {
          current = offsets[i].id;
          break;
        }
      }
      setActiveId(current);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth",
    });
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-xl cursor-pointer text-purple-600 dark:text-purple-300 select-none"
          aria-label="Homepage"
        >
          Cody Zhang
        </div>

        <ul className="hidden md:flex space-x-10 text-gray-700 dark:text-gray-300 font-medium">
          {navItems.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition ${
                activeId === id
                  ? "text-purple-600 dark:text-purple-400 font-semibold"
                  : ""
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
