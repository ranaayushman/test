import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className="flex justify-between space-x-4 px-2">
      <div className="relative flex items-center drop-shadow-custom">
        <Search className="absolute left-3 text-black" />
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
          className={`pl-10 pr-4 py-2 w-full rounded-full ${
            search ? "text-black" : "text-black"
          }`}
        />
      </div>
      <button
        onClick={toggleFilter}
        className={`flex items-center px-4 py-2 rounded-full drop-shadow-custom ${
          filter ? " text-slate-500" : "bg-white text-black"
        }`}
      >
        <SlidersHorizontal className="mr-2" />
        Filter by Class
      </button>
    </div>
  );
};

export default SearchFilter;