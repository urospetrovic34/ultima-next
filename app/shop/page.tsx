import ProductList from "@/components/product/List";

async function getProducts() {
  const res = await fetch(
    `${process.env.API_URL}/rest/v1/product?select=*,product_category(name)`,
    {
      method: "GET",
      headers: {
        apiKey: process.env.API_KEY as string,
        Authorization: `Bearer ${process.env.API_KEY}` as string,
        Range: "0-8",
      },
    }
  );
  return res.json();
}

export default async function Shop() {
  const productData = await getProducts();
  return (
    <div className="flex justify-center items-center my-20">
      <ProductList products={productData} />
    </div>
  );
}
