import ProductCard from "@/components/product/Card";

interface InputProps {
  products: any[];
}

const List = ({ products }: InputProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((data, index) => (
        <div key={index}>
          <ProductCard
            image={data.image}
            category={data.product_category.name}
            name={data.name}
            slug={data.slug}
          />
        </div>
      ))}
    </div>
  );
};

export default List;
