import { SkillsCard } from "../components/ui/SkillsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../components/utils/data";

function Skills() {
  return (
    <section id="skills">
      <div>
        <h1 className="text-3xl md:text-4xl pb-5 font-semibold text-center">
          My Skills
        </h1>
        <div className="flex justify-center py-5 max-h-[520px] overflow-scroll md:max-h-fit md:overflow-auto">
          <div className="grid justify-center grid-cols-[repeat(auto-fill,160px)] gap-2 md:gap-4 lg:gap-6 w-full">
            {skills.map((skill) => (
              <SkillsCard key={skill.name}>
                <FontAwesomeIcon icon={skill.icon} className="text-4xl" />
                <p>{skill.name}</p>
              </SkillsCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
