export const Input = ({ type, name, placeholder, required }) => {
  return (
    <label className="mb-5">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="rounded outline-2 outline-black px-5 py-3 mb-5 w-full focus:shadow-md/25 hover:bg-(--zinc-100) transition-all peer invalid:not-placeholder-shown:outline-(--error)"
      />
      <p className="hidden peer-invalid:peer-not-placeholder-shown:block -mt-3 mb-3 text-(--error)">
        Please provide a valid {placeholder}
      </p>
    </label>
  );
};
