import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetch } from "./store/fetchSlice";
import SearchResults from "./SearchResults";

function SearchForm() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetch.data);
  const error = useSelector((state) => state.fetch.error);
  const loading = useSelector((state) => state.fetch.loading);
  const [minLetters, setMinLetters] = useState(false);
  const apiKey = import.meta.env.VITE_APIKEY;
  const [query, setQuery] = useState("");
  const endPoint = `complexSearch?query=${query}&number=20&apiKey=${apiKey}`;
  console.log(data);
  const handleSearch = (query) => {
    if (query.length <= 1) {
      setMinLetters((oldVal) => (oldVal = true));
      return;
    } else {
      console.log("fetching");
      setMinLetters((oldVal) => (oldVal = false));
      setQuery(query);
      dispatch(handleFetch(endPoint));
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(), handleSearch(query);
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
      {loading ? <p>Loading..</p> : null}
      <div  className="flex flex-wrap justify-center">
        {data.results
          ? data.results.map((meal) => <SearchResults meal={meal} key={meal.id}/>)
          : null}
      </div>
    </div>
  );
}

export default SearchForm;
