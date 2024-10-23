import React, { useState, useRef, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const filterRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleFilter = () => {
    setFilter(!filter);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between space-x-4 px-2">
      <div className="relative flex items-center drop-shadow-custom">
        <Search className="absolute left-3 text-black" />
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search Individual Student"
          className={`pl-10 pr-4 py-2 w-full rounded-full ${
            search ? "text-black" : "text-black"
          }`}
        />
      </div>
      <button
        ref={filterRef}
        onClick={toggleFilter}
        className={`flex items-center px-4 py-2 rounded-full drop-shadow-custom transition-all duration-200 ${
          filter ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Image
          width={20}
          height={20}
          src="/svg/filter.svg"
          alt="filter"
          className="mx-2"
        />
        Filter by Class
      </button>
    </div>
  );
};

export default SearchFilter;
