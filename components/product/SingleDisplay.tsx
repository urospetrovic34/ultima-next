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
        width={0}
        height={0}
        alt={alt}
        sizes="(max-width: 768px) 200px, (max-width: 992px) 400px"
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
      />
      <ProductOptions name={name} price={price} />
    </div>
  );
};

export default SingleDisplay;
