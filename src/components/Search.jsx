// Creating the Search field

import { useEffect, useState } from "react";

export default function Search() {
  // Utilizing the useState function
  // useState default is set to pizza for API callback
  const [query, setQuery] = useState("pizza");
  //   useEffect hook
  // Syntax of the useEffect hook
  // Pass in the callback function ()=>{}, then the dependency array []
  // Whenever value changes-reinitialize the useEffect hook by passing the query into the dependency array[]

  // Simplest example:
  // useEffect(()=>{
  // function demo() {
  // console.log("Demo Function Executed")
  // }
  // demo()
  // }, [query]);

  // Whenever value changes-reinitialize the useEffect hook by passing the query into the dependency array[]
  useEffect(() => {}, []);
  useEffect(() => {}, []);
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
