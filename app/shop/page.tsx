import ProductList from "@/components/product/List";
import pagination from "@/lib/utils/pagination";

async function getProducts(page: number) {
  const res = await fetch(
    `${process.env.API_URL}/rest/v1/product?select=*,product_category(name)`,
    {
      method: "GET",
      headers: {
        apiKey: process.env.API_KEY as string,
        Authorization: `Bearer ${process.env.API_KEY}` as string,
        Range: pagination(page),
        Prefer: "count=exact",
      },
      next: { tags: [`products-page-${page}`] },
    }
  );

  const data = await res.json();

  return data;
}

export default async function Shop({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { page } = searchParams;
  const pageNumber = page ? Number(page) : 1;
  const productData = await getProducts(pageNumber);
  return (
    <div className="flex justify-center items-center my-20">
      <ProductList products={productData} />
    </div>
  );
}
