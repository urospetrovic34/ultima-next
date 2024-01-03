import ProductCard from "@/components/product/Card";
import Pagination from "@/components/Pagination";

interface InputProps {
  products: any[];
  pagination: any;
}

const List = ({ products, pagination }: InputProps) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-4 mb-5">
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
      {/* <Pagination count={Math.ceil(pagination.total / 9)} /> */}
    </div>
  );
};

export default List;
