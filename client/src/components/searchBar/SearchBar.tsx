import { useState } from "react";
import { Search } from "lucide-react";

const types = [
  { id: "space", label: "Office Space" },
  { id: "coworking", label: "Coworking" },
  { id: "event", label: "Event Space" },
];

const SearchBar = () => {
  const [query, setQuery] = useState({
    id: "space",
  });

  const switchTypes = (value: string) => {
    setQuery((prev) => ({ ...prev, id: value }));
  };

  return (
    <div className="search-bar">
      <div className="search-bar__type">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => switchTypes(type.id)}
            className={query.id === type.id ? "active" : ""}
          >
            {type.label}
          </button>
        ))}
      </div>
      <div className="search-bar__fields">
        <form>
          <input type="text" name="location" placeholder="Search Location" />
          <button>
            <Search size={24} color="white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
