// 📄 src/components/About.jsx

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-purple-600 mb-4">👋 About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a software developer with a passion for building clean, interactive web apps and solving real-world problems.
            I love working with modern tools like React, AWS, and Python to craft efficient and scalable solutions.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <img
            src="/cody_paddling.JPG"
            alt="Profile"
            style={{ width: "400px", height: "400px" }}
            // className="object-cover rounded-full border-2 border-purple-300 shadow-md mx-auto"
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
