import { memo, useEffect } from "react"
import { handleRandomReceipts } from "./store/randomReceiptsSlice"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Loader from './Loader'
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
      <h3 className="p-2">Random receipts</h3>
        {loading ? <Loader /> :null}
      <div className="flex flex-wrap">
        {data.results ? data.results.map(receipt=>
        <Link to={`/cooking-assistant/ReceiptDetails/${receipt.id}`} key={receipt.id} className="mx-auto shadow-md m-2 flex-[0_1_300px]">
          <header className="min-h-[75px] grid place-content-center">
            <p className="font-bold text-lg">{receipt.title}</p>
          </header>
          <img className="max-w-full block mx-auto p-4" src={receipt.image} alt="food image" />
        </Link>
        ) :null}
      </div>
    </div>
  )
}

export default memo(RandomReceipts)