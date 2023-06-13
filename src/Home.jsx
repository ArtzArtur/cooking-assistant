import SearchForm from "./SearchForm"


function Home() {
  return (
    <div className="text-center  text-white">
          <h3 className="p-5 tracking-[0.5ch]  bg-red-800">Welcome to cooking assistant</h3>
          <SearchForm />
    </div>
  )
}

export default Home