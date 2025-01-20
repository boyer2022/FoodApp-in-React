// Creating the Search field

import { useEffect, useState } from "react";

// Making an api call
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "63d8bc3f15414a0aa57f982f2fa85c36";

export default function Search() {
  // Utilizing the useState function
  // useState default is set to pizza for API callback
  const [query, setQuery] = useState("pizza");
  //   useEffect hook
  // Syntax of the useEffect hook
  // Pass in the callback function ()=>{}, then the dependency array []
  // Whenever value changes-reinitialize the useEffect hook by passing the query into the dependency array[]

  // Simplest example (uncomment to test):
  // useEffect(()=>{
  // function demo() {
  // console.log("Demo Function Executed")
  // }
  // demo()
  // }, [query]);

  // Whenever value changes-reinitialize the useEffect hook by passing the query into the dependency array[]
  // Comment out when testing
  useEffect(() => {
    async function fetchFood() {
      // Saves as a response in form of json
      // Making the fetch response asychronous to wait
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
    }
    // Calling the data
    fetchFood();
  }, []);

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
