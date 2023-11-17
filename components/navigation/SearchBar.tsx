"use client";

const SearchBar = () => {
  return (
    <div className="relative w-full mr-[80px]">
      <input
        type="text"
        className="block w-full py-2 px-6 rounded-3xl outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
