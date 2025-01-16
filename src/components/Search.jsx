// Creating the Search field

import { useState } from "react";

export default function Search() {
  // Utilizing the useState function
  // useState default is set to pizza for API callback
  const [query, setQuery] = useState("pizza");
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
