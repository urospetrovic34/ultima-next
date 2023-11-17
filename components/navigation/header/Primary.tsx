import Link from "next/link";

import NavigationSearchBar from "@/components/navigation/SearchBar";

const Primary = () => {
  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl flex items-center gap-[80px] mx-auto py-5">
        <div>
          <Link
            href="/"
            className="text-3xl font-bold text-content whitespace-nowrap"
          >
            Ultima
          </Link>
        </div>
        <NavigationSearchBar />
      </div>
    </nav>
  );
};

export default Primary;
