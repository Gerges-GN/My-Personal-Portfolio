import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCardTilt } from "../../hooks/CardTilt";

export const ProjectCard = ({ num, title, description, src, liveURL }) => {
  const { rotate, onMouseMove, onMouseLeave } = useCardTilt(10, 15);

  return (
    <div className="flex flex-col lg:flex-row md:items-center gap-5 mb-10">
      <div
        className={`${
          num % 2 == 0 && "lg:order-1 "
        } flex-1/2 max-w-[440px] sm:min-w-[350px] sm:max-h-[300px] lg:min-h-[350px] mx-auto overflow-hidden flex justify-center items-center rounded-2xl bg-white`}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          WebkitTransform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          MozTransform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          msTransform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "transform 200ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          WebkitTransition:
            "transform 200ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          MozTransition:
            "transform 200ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          msTransition:
            "transform 200ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
      >
        <a
          href={liveURL}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[440px] sm:min-w-[350px] sm:max-h-[300px] lg:min-h-[350px]"
        >
          <img
            src={src}
            alt={title || "Project Image"}
            loading="lazy"
            className="h-full"
          />
        </a>
      </div>
      <div className="flex-1/2 lg:ml-10 max-w-[450px] lg:max-w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-black mb-3">
          {num < 10 && 0}
          {num}
        </h1>

        <a
          href={liveURL}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <h2 className="text-2xl md:text-3xl font-semibold leading-9 mb-3 md:mb-5">
            {title}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xl md:text-2xl group-hover:scale-110 transition ml-3 pb-0.5"
            />
          </h2>
        </a>

        <p className="text-(--zinc-500) mb-5 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};
