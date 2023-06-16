import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };
  return (
    <article>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchInput} onChange={handleChange} />
        <input type="submit" />
      </form>
    </article>
  );
};
export default Search;
