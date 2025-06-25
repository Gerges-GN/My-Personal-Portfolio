import { ExperienceCard } from "../components/ui/ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="w-full bg-black text-white">
      <div>
        <h1 className="text-3xl md:text-4xl mb-10 font-medium text-center">
          My Experience
        </h1>

        <ExperienceCard
          title="Freelance"
          date="Jun 2025 - Present"
          description="Over the past few years, I've been honing my frontend development
          skills by learning independently and building real projects using
          React, Tailwind, and modern tools. This freelance phase has helped me
          grow practically and get ready for real-world opportunities."
        />
      </div>
    </section>
  );
}

export default Experience;
