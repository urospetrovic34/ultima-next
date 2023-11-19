"use client";

import ReusableInput from "@/components/reusable/Input";
import ReusableButton from "@/components/reusable/Button";

type CardProps = {
  name: string;
  price: number;
};

const Options = ({ name, price }: CardProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <p className="text-2xl">{name}</p>
        <p className="text-lg">${price}/Meter</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="max-w-[70px]">
          <p>Quantity</p>
          <ReusableInput value="1" disabled={true} id={"quantity"} />
        </div>
        <ReusableButton text="Add to Cart" />
      </div>
    </div>
  );
};

export default Options;
