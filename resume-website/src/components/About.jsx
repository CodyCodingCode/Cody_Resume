import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-semibold mb-4 text-blue-600">About Me</h2>
      <p className="text-lg leading-relaxed">
        I'm a full-stack developer with a background in chemistry and experience in cloud services, AI training, and infrastructure management. I'm passionate about clean code, impactful UI, and building projects that solve real problems.
      </p>
    </SectionWrapper>
  );
}
