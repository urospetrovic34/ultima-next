import ReusableButton from "@/components/reusable/Button";
import Link from "next/link";

interface PaginationProps {
  count: number;
}

const Pagination = ({ count }: PaginationProps) => {
  return (
    <div className="flex justify-center gap-1">
      <Link
        className="w-[40px] h-[40px]"
        scroll
        href={{ pathname: "/shop", query: { page: "1" } }}
      >
        <ReusableButton text="<" rounded={true} />
      </Link>
      {[...Array(count)].map((x, index) => {
        return (
          <Link
            key={index}
            className="w-[40px] h-[40px]"
            scroll
            href={{
              pathname: "/shop",
              query: { page: (index + 1).toString() },
            }}
          >
            <ReusableButton
              key={index}
              text={(index + 1).toString()}
              rounded={true}
            />
          </Link>
        );
      })}
      <Link
        className="w-[40px] h-[40px]"
        scroll
        href={{ pathname: "/shop", query: { page: "1" } }}
      >
        <ReusableButton text=">" rounded={true} />
      </Link>
    </div>
  );
};

export default Pagination;
