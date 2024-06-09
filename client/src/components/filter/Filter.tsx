import { Search } from "lucide-react";

import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search Result for <b>Shah Alam</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="min">Min Price</label>
          <input
            type="number"
            name="min"
            id="min"
            max={0}
            placeholder="Min Price"
          />
        </div>
        <div className="item">
          <label htmlFor="max">Max Price</label>
          <input
            type="number"
            name="max"
            id="max"
            max={100000}
            placeholder="Max Price"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <select name="bedroom" id="bedroom">
            <option value="">Any</option>
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <button>
          <Search size={24} />
        </button>
      </div>
    </div>
  );
};

export default Filter;
