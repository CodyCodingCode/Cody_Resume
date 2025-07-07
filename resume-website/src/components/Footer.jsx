import SectionWrapper from "./SectionWrapper";

function Footer() {
  return (
    <SectionWrapper>
    <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4 mt-10">
      <p>© 2025 Cody Zhang • <a href="https://github.com/CodyCodingCode" className="text-blue-500">GitHub</a> • <a href="https://linkedin.com/in/cody-zhang" className="text-blue-500">LinkedIn</a></p>
    </footer>
    </SectionWrapper>
  );
}

export default Footer;