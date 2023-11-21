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
    <div className="flex flex-col cursor-pointer w-[300px]">
      <Link href={{ pathname: `/${category}/${slug}` }}>
        <div className="relative h-[300px]">
          <Image
            src={image}
            fill
            sizes="100vw"
            alt={slug}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-primary p-3">
          <p className="capitalize text-lg">{category}</p>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
