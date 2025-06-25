import { Card } from "../components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faCogs,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const skills = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3Alt },
    { name: "JavaScript", icon: faJsSquare },
    { name: "React.js", icon: faReact },
    { name: "Context API", icon: faCogs },
    { name: "Git", icon: faGitAlt },
    { name: "Tailwind CSS", icon: faCode },
    { name: "Responsive Design", icon: faMobileScreenButton },
  ];
  return (
    <section id="skills">
      <div>
        <h1 className="text-2xl md:text-4xl pb-5 font-semibold text-center">
          My Skills
        </h1>
        <div className="flex justify-center py-5 max-h-[520px] overflow-scroll md:max-h-fit md:overflow-auto">
          <div className="grid justify-center grid-cols-[repeat(auto-fill,160px)] gap-2 md:gap-4 lg:gap-6 w-full">
            {skills.map((skill) => (
              <Card key={skill.name}>
                <FontAwesomeIcon icon={skill.icon} className="text-4xl" />
                <p>{skill.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
