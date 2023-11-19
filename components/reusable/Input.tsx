interface InputProps {
  placeholder?: string;
  required?: boolean;
  id: string;
  type?: string;
  disabled?: boolean;
  value?: string;
}

const Input = ({
  placeholder,
  required = false,
  id,
  type = "text",
  disabled,
  value,
}: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      className="p-2 text-sm tw-border-solid border border-solid border-gray w-full block focus:border-transparent focus:outline-none focus:border-black"
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      value={value}
    />
  );
};

export default Input;
