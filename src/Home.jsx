import SearchForm from "./SearchForm"


function Home() {
  return (
    <div className="bg-red-800 bg-opacity-80 text-center p-5 text-white">
          <h3 className="p-5 tracking-[0.5ch]">Welcome to cooking assistant</h3>
          <SearchForm />
    </div>
  )
}

export default Home