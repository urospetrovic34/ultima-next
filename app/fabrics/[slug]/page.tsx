import ProductSingleDisplay from "@/components/product/SingleDisplay";

async function getProduct(slug: string) {
  const res = await fetch(
    `${process.env.API_URL}/rest/v1/product?slug=eq.${slug}&select=*,product_category(name)`,
    {
      method: "GET",
      headers: {
        apiKey: process.env.API_KEY as string,
        Authorization: `Bearer ${process.env.API_KEY}` as string,
      },
      next: { revalidate: 3600 },
    }
  );
  return res.json();
}

export default async function Fabric({ params }: { params: { slug: string } }) {
  const productData = await getProduct(params.slug);
  return (
    <ProductSingleDisplay
      image={productData[0].image}
      alt={productData[0].slug}
      name={productData[0].name}
      price={productData[0].price}
    />
  );
}
