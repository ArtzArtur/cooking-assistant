import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "./store/searchSlice";
import SearchResult from "./SearchResult";
import Loader from "./Loader";

function SearchForm() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.search.data);
  const error = useSelector((state) => state.search.error);
  const loading = useSelector((state) => state.search.loading);
  const [minLetters, setMinLetters] = useState(false);
  const [query, setQuery] = useState("");
  const handleForm = (query) => {
    if (query.length <= 1) {
      setMinLetters((oldVal) => (oldVal = true));
      return;
    }
    setMinLetters((oldVal) => (oldVal = false));
    setQuery(query);
    dispatch(handleSearch(query));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(), handleForm(query);
        }}
        className="grid place-content-center"
      >
        <input
          onChange={(e) => setQuery((old) => (old = e.target.value.trim()))}
          type="text"
          className="text-black p-2 rounded-xl outline-none"
          placeholder="Looking for..?"
        />
        {minLetters ? (
          <p className="text-red-100">Type at least 2 letters</p>
        ) : null}
        <button className="p-2 m-2 border-2 border-white rounded-xl hover:bg-red-600">
          Search
        </button>
      </form>

      {loading ? (
        <div className="min-h-[350px] grid place-content-center bg-white">
          <Loader />
        </div>

      ) : null}
      <div className="flex flex-wrap justify-center">
        {error ? <div>{error}</div> :null}
        {data.results
          ? data.results.map((meal) => (
              <SearchResult meal={meal} key={meal.id} />
            ))
          : null} 
      </div>
    </div>
  );
}

export default SearchForm;
