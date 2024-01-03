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
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={slug}
            key={slug}
            sizes="(max-width: 768px) 150px, (max-width: 992px) 300px"
            height={0}
            width={0}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
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
