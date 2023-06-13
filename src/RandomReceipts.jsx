import { memo, useEffect } from "react"
import { handleRandomReceipts } from "./store/randomReceiptsSlice"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Loader from './Loader'
import SearchResult from "./SearchResult"
function RandomReceipts() {
  const data = useSelector(state=>state.random.data)
  const error = useSelector(state=>state.random.error)
  const loading = useSelector(state=>state.random.loading)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(handleRandomReceipts())
  },[])
  return (
    <div  className="text-center">
        {loading ? <Loader /> :null}
      <div className="flex flex-wrap">
        {error ? <div>{error}</div> :null}
        {data.results ? data.results.map(meal=>
        <div className="mx-auto" key={meal.id}>
          <SearchResult meal={meal} />
        </div>

        ) :null}
      </div>
    </div>
  )
}

export default memo(RandomReceipts)