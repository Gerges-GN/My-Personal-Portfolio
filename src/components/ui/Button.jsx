export const Button = ({ url, children }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-3.5 py-3 rounded hover:bg-neutral-700 focus:bg-white focus:text-black focus:outline-2 outline-black transition"
    >
      {children}
    </a>
  );
};
