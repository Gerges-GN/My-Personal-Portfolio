export const ExperienceCard = ({ title, date, description }) => {
  return (
    <div className="flex flex-col justify-center p-7 mb-5 border border-white rounded-xl font-light hover:**:text-white ">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5">
        <h3 className="text-xl font-medium">{title}</h3>
        <h5 className="text-(--zinc-300)">{date}</h5>
      </div>
      <div>
        <p className="text-(--zinc-300)">{description}</p>
      </div>
    </div>
  );
};
