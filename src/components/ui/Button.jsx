export const Button = ({ url, children, secondary, className }) => {
  if (!secondary) secondary = false;
  if (!className) className = "";
  const primaryStyles =
    "bg-black text-white hover:bg-neutral-700 focus:bg-white focus:text-black";
  const secondaryStyles = "hover:bg-black hover:text-white";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        secondary ? secondaryStyles : primaryStyles
      } ${className} px-3 py-2.5 rounded outline-2 outline-black transition flex items-center w-fit`}
    >
      {children}
    </a>
  );
};
