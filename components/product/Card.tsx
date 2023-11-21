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
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            alt={slug}
            style={{
              objectFit: "cover",
            }}
            className="hover:scale-105 transition-[transform] duration-500"
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
