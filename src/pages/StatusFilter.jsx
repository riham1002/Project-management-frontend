import React from "react";

function StatusFilter({ statusFilter, setStatusFilter }) {
    return (
      <fieldset>
        
        {categories.map((status) => (
          <label htmlFor={cat} key={cat}>
            {cat}
            <input
              type="radio"
              name="categories"
              id={cat}
              value={cat}
              checked={cat === catFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            />
          </label>
        ))}
      </fieldset>
    );
  }
  
  export default StatusFilter;