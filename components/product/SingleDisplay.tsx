import Image from "next/image";

import ProductOptions from "@/components/product/Options";

type SingleDisplayProps = {
  image: string;
  alt: string;
  name: string;
  price: number;
};

const SingleDisplay = ({ image, alt, name, price }: SingleDisplayProps) => {
  return (
    <div className="flex justify-center my-20 gap-5">
      <Image
        src={image}
        width={400}
        height={400}
        alt={alt}
        style={{
          maxWidth: "100%",
          height: "400px",
        }}
      />
      <ProductOptions name={name} price={price} />
    </div>
  );
};

export default SingleDisplay;
