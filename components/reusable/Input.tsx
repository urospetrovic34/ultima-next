interface InputProps {
  placeholder?: string;
  required?: boolean;
  id: string;
  type?: string;
}

const Input = ({
  placeholder,
  required = false,
  id,
  type = "text",
}: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      className="p-2 text-sm tw-border-solid border border-solid border-gray w-full block focus:border-transparent focus:outline-none focus:border-black"
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
