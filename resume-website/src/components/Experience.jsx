import SectionWrapper from "./SectionWrapper";

function Experience() {
  return (
    <SectionWrapper>
    <section>
      <h2 className="text-xl font-semibold mb-2">Experience</h2>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <strong>Software Developer – ServTennis</strong> <br />
          Built a full-stack booking system using Django, React, and AWS.
        </li>
        <li>
          <strong>AI Trainer – Outlier AI</strong> <br />
          Evaluated and improved AI model responses across different contexts.
        </li>
      </ul>
    </section>
    </SectionWrapper>
  );
}

export default Experience;