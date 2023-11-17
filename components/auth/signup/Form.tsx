"use client";

import ReusableInput from "@/components/reusable/Input";
import ReusableLabel from "@/components/reusable/Label";
import ReusableButton from "@/components/reusable/Button";
import { register } from "@/app/actions";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";

const fields = [
  { id: "email", text: "Email", type: "email" },
  { id: "password", text: "Password", type: "password" },
  { id: "username", text: "Username", type: "text" },
];

const Form = () => {
  const [state, formAction] = useFormState(register, null);

  return (
    <form action={formAction} className="flex flex-col w-[300px] gap-5">
      <h3 className="text-xl font-semibold">Create your free account</h3>
      <div className="h-0 flex items-center">
        <p className="text-[#ff0000]">{state ? state : ""}</p>
      </div>
      {fields.map((field) => (
        <div key={field.id}>
          <ReusableLabel htmlFor={field.id} text={field.text} />
          <ReusableInput type={field.type} id={field.id} required />
        </div>
      ))}
      <div>
        <ReusableButton type={"submit"} text="Sign up" />
      </div>
    </form>
  );
};

export default Form;
