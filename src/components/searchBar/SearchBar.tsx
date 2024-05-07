import { useState } from "react";
import "./searchBar.scss";
import { Search } from "lucide-react";

const types = ["daily", "montly"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "daily",
    min: 0,
    max: 10000,
  });

  const switchTypes = (value: string) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };

  return (
    <div className="search-bar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchTypes(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Search Location" />
        <input type="number" name="minPrice" min={0} placeholder="Min Price" />
        <input
          type="number"
          name="maxPrice"
          max={1000000}
          placeholder="Max Price"
        />
        <button>
          <Search size={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
