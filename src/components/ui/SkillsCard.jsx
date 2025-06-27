import { useCardTilt } from "../../hooks/CardTilt";

export const SkillsCard = ({ children }) => {
  const { rotate, onMouseMove, onMouseLeave } = useCardTilt(10, 7);

  return (
    <div
      className="
      flex flex-col items-center justify-center text-center gap-2 p-2 w-40 h-40 rounded border-2
    border-black hover:bg-black hover:text-white text-base md:text-lg font-medium tran sition-all"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(500px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    >
      {children}
    </div>
  );
};
