import Image from "next/image";

import ProductOptions from "@/components/product/Options";
import { headers } from "next/headers";

async function getProduct(slug: string) {
  const heads = headers();
  const res = await fetch(
    `${process.env.API_URL}/rest/v1/product?slug=eq.${slug}&select=*,product_category(name)`,
    {
      method: "GET",
      headers: {
        apiKey: process.env.API_KEY as string,
        Authorization: `Bearer ${process.env.API_KEY}` as string,
      },
    }
  );
  return res.json();
}

export default async function Fabric({ params }: { params: { slug: string } }) {
  const productData = await getProduct(params.slug);
  return (
    <div className="flex justify-center my-20 gap-5">
      <Image
        src={productData[0].image}
        width={400}
        height={400}
        alt={productData[0].slug}
        placeholder="blur"
        blurDataURL={productData[0].image}
        className="group-hover:opacity-75"
      />
      <ProductOptions name={productData[0].name} price={productData[0].price} />
    </div>
  );
}
