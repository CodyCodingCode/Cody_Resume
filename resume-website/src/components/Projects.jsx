// Step 5: Projects section with animated cards

// 📄 src/components/Projects.jsx

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Healthcare Chatbot",
    description:
      "Conversational assistant built with Python and LLM APIs to answer common patient queries. Deployed with AWS Lambda and API Gateway.",
    tech: ["Python", "LLM API", "AWS"],
    github: "https://github.com/CodyCodingCode/healthcare-chatbot",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile-friendly app to log workouts and sync data with AWS DynamoDB. Built with React, Flask, and AWS Amplify.",
    tech: ["React", "Flask", "DynamoDB"],
    github: "https://github.com/CodyCodingCode/fitness-tracker",
  },
  {
    title: "Resume Website",
    description:
      "Personal website built with Vite, React, and TailwindCSS to showcase my portfolio and resume.",
    tech: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/CodyCodingCode/cody_resume",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-semibold mb-12 text-purple-600">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {proj.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm text-purple-600 hover:underline dark:text-purple-300"
            >
              <Github className="w-4 h-4 mr-1" /> View Code
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
