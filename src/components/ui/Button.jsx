export const Button = ({
  url,
  children,
  secondary,
  black,
  className = "",
  onClick,
}) => {
  const baseStyle =
    "px-3 py-2.5 rounded outline-2 outline-black transition flex items-center w-fit";

  const primaryStyle =
    "bg-black text-white hover:bg-neutral-800 focus:bg-white focus:text-black";
  const secondaryStyle = "hover:bg-black hover:text-white";
  const blackStyle = "bg-white text-black hover:bg-zinc-200";

  const variantStyle = black
    ? blackStyle
    : secondary
    ? secondaryStyle
    : primaryStyle;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${variantStyle} ${baseStyle} ${className}`}
    >
      {children}
    </a>
  );
};
