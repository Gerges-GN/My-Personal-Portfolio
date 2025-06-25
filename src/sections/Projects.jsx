import { useState } from "react";
import { Button } from "../components/ui/Button";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects } from "../components/utils/data";

function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => setVisibleCount((prev) => prev + 2);
  const handleShowLess = () => setVisibleCount((prev) => prev - 2);

  const canShowMore = visibleCount < projects.length;
  const canShowLess = visibleCount > 4;

  return (
    <section id="projects" className="w-full bg-black text-white">
      <div>
        <h1 className="text-3xl md:text-4xl mb-16 font-medium text-center">
          My Projects
        </h1>
        <div>
          {projects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={index} num={index + 1} {...project} />
          ))}
        </div>

        {(canShowMore || canShowLess) && (
          <div className="flex justify-center gap-5 py-5">
            {canShowLess && (
              <Button black onClick={handleShowLess}>
                Show Less
              </Button>
            )}
            {canShowMore && (
              <Button black onClick={handleShowMore}>
                Show More
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
