import { ExperienceCard } from "../components/ui/ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="w-full bg-black text-white">
      <div>
        <h1 className="text-3xl md:text-4xl mb-10 font-medium text-center">
          My Experience
        </h1>
        <ExperienceCard
          title="React Frontend Web Developer Trainee @DEPI"
          date="Nov 2025 - Present"
          description="Trainee in the DEPI Initiative – React Frontend Web Developer track. Gaining hands-on experience in modern web development using HTML, CSS, JavaScript, TypeScript, and React.js, working with Git/GitHub, applying UI/UX principles, and building responsive interfaces. Also gaining basic exposure to Node.js, Docker, and delivering a real-world capstone project."
        />
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
