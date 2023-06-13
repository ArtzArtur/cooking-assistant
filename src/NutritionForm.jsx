import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { handleNutritionReceipts } from "./store/nutritionSlice"
import SearchResult from "./SearchResult"
import Loader from "./Loader"

function NutritionForm() {
  const [nutrition,setNutrition] = useState({
    calories:0,protein:0,carbs:0,fat:0
  })
  const data = useSelector(state=>state.nutrition.data) 
  const loading = useSelector(state=>state.nutrition.loading) 
  const error = useSelector(state=>state.nutrition.error)
  const dispatch = useDispatch()
  const handleSubmit = (e,nutrition) => {
    e.preventDefault()
    dispatch(handleNutritionReceipts(nutrition))
  }
  return (
    <div className="">
      <form
        className=" bg-red-700 grid place-content-center text-white"
        onSubmit={e=>handleSubmit(e,nutrition)}
      >
        <label>Maximum calories:</label>
        <p>{nutrition.calories}</p>
        <input
          type='range' min="0" max="2999" step="1"
          onChange={(e)=>setNutrition(old=>(
            {
            ...old,calories:e.target.value
            }
          ))}
        />
        <label>Maximum protein:</label>
        <p>{nutrition.protein}</p>
        <input
          type='range' min="0" max="999" step="1"
          onChange={(e)=>setNutrition(oldVal=>({
            ...oldVal,protein:e.target.value
          }))}
        />
        <label>Maximum carbohydrates:</label>
        <p>{nutrition.carbs}</p>
        <input
          type='range' min="0" max="999" step="1"
          onChange={(e)=>setNutrition(oldVal=>({
            ...oldVal,carbs:e.target.value
          }))}
        />
        <label>Maximum fat:</label>
        <p>{nutrition.fat}</p>
        <input
          type='range' min="0" max="999" step="1"
          onChange={(e)=>setNutrition(oldVal=>(
            {
              ...oldVal,fat:e.target.value
            }
          ))}
        />
        <button className="p-2 m-2 border-2 border-white rounded-xl hover:bg-red-600">
          Search
        </button>
      </form>
      {loading ? <Loader /> : null}
      {error ? <p className="text-center">{error}</p> : null}
      <div className="flex flex-wrap justify-center ">
      {
        data ? data.map(meal=>
          <SearchResult meal={meal} key={meal.id}/>
          ) :null
        }
        </div>
      </div>
      )
}

export default NutritionForm