interface ButtonProps {
  text?: string;
  type?: HTMLButtonElement["type"];
  rounded?: boolean;
}

const Button = ({
  type = "button",
  text = "Button",
  rounded = false,
}: ButtonProps) => {
  return (
    <button
      className={`bg-primary text-white w-full block p-2 ${
        rounded && "rounded-full"
      }`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
