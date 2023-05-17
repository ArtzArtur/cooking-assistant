import { useState } from "react"
import {useDispatch} from 'react-redux'
import {handleFetch} from './store/fetchSlice'

function SearchForm() {
  const dispatch = useDispatch()
  const apiKey = import.meta.env.VITE_APIKEY
  // const endPoint = `random?number=5&apiKey=${apiKey}`
  const [query,setQuery] = useState()
  const handleSearch = (e) => {
    if(e.target.value<2){
      return
    }
    else{
      setQuery(e.target.value)
    }
  }
  const endPoint = `complexSearch?query=${query}&apiKey=${apiKey}`
  return (
    <form className='grid place-content-center'>
      <input 
      onChange={(e)=>handleSearch(e)}
      type="text" className='text-black p-2 rounded-xl outline-none' placeholder="Looking for..?"/>
      <button type="button" onClick={()=>dispatch(handleFetch(endPoint))} className="p-2 m-2 border-2 border-white rounded-xl hover:bg-red-600">Search</button>
    </form>
  )
}

export default SearchForm