import SearchForm from "./SearchForm"


function Home() {
  return (
    <div className="bg-red-800 bg-opacity-80 text-center p-5 text-white">
          <h1 className="p-5">Welcome to cooking assistant</h1>
          <SearchForm />
    </div>
  )
}

export default Home