export const Card = ({ children }) => {
  return (
    <div
      className="
      flex flex-col items-center justify-center text-center gap-2 p-2 w-40 h-40 rounded border-2
    border-black hover:bg-black hover:text-white text-base md:text-lg font-medium transition-all"
    >
      {children}
    </div>
  );
};
