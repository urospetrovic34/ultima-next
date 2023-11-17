interface ButtonProps {
  text?: string;
  type?: HTMLButtonElement["type"];
}

const Button = ({ type = "button", text = "Button" }: ButtonProps) => {
  return <button className="bg-primary text-white w-full block p-2" type={type}>{text}</button>;
};

export default Button;
