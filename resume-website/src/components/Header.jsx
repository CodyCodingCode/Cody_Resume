import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="py-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Cody Zhang
        </motion.h1>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
        </nav>
      </div>
    </header>
  );
}
