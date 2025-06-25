import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectCard = ({ num, title, description, src, liveURL }) => {
  return (
    <div className="flex flex-col lg:flex-row md:items-center gap-5 mb-10">
      <div
        className={`${
          num % 2 == 0 && "md:order-1 "
        } flex-1/2 max-w-[440px] sm:min-w-[350px] sm:max-h-[300px] lg:min-h-[350px] mx-auto overflow-hidden flex justify-center items-center rounded-2xl bg-white hover:scale-[102%] transition-all ease-in-out`}
      >
        <a href={liveURL} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={title || "Project Image"}
            className="max-h-[250px] sm:max-h-[350px] min-w-fit text-black"
          />
        </a>
      </div>
      <div className="flex-1/2 lg:ml-10 max-w-[450px] lg:max-w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-black mb-3">
          {num < 10 && 0}
          {num}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5">{title}</h2>
        <p className="text-(--zinc-500) mb-5 whitespace-pre-line">
          {description}
        </p>
        <a href={liveURL} target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-xl hover:scale-110 transition"
          />
        </a>
      </div>
    </div>
  );
};
