// 📄 src/components/Footer.jsx

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 mt-20 px-6 md:px-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Cody Zhang</p>
        <div className="flex gap-6 text-purple-600 dark:text-purple-300">
          <a
            href="https://github.com/CodyCodingCode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/cody-zhang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:codyzhang4@hotmail.com"
            className="hover:text-purple-400 transition"
          >
            <Mail />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
