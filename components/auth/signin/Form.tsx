"use client";

import ReusableInput from "@/components/reusable/Input";
import ReusableLabel from "@/components/reusable/Label";
import ReusableButton from "@/components/reusable/Button";
import { login } from "@/app/actions";
import { useFormState } from "react-dom";

const fields = [
  { id: "email", text: "Email", type: "email" },
  { id: "password", text: "Password", type: "password" },
];

const Form = () => {
  const [state, formAction] = useFormState(login, null);

  return (
    <form action={formAction} className="flex flex-col w-[300px] gap-5">
      <h3 className="text-xl font-semibold">Log In</h3>
      <div className="h-0 flex items-center">
        <p className="text-[#ff0000]">{state ? state : ""}</p>
      </div>
      {fields.map((field) => (
        <div key={field.id}>
          <ReusableLabel htmlFor={field.id} text={field.text} />
          <ReusableInput type={field.type} id={field.id} required />
        </div>
      ))}
      <ReusableButton type={"submit"} text="Log In" />
    </form>
  );
};

export default Form;
