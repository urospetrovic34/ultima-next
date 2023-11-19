"use client";

import Image from "next/image";
import Link from "next/link";

type CardProps = {
  image: string;
  category: string;
  name: string;
  slug: string;
};

const Card = ({ image, category, name, slug }: CardProps) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <Link href={{ pathname: `/${category}/${slug}` }}>
        <Image
          src={image}
          width={300}
          height={300}
          alt="čmar"
          style={{
            height: "300px",
            objectFit: "cover",
          }}
        />
        <div className="bg-primary p-3">
          <p className="capitalize text-lg">{category}</p>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
