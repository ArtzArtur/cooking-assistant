import { useState } from "react"
import {useDispatch} from "react-redux"
import { handleNutritionReceipts } from "./nutritionSlice"


function NutritionForm() {
  const [nutrition,setNutrition] = useState({
    calories:0,protein:0,carbs:0,fat:0
  }) 
  const dispatch = useDispatch()
  const handleSubmit = (e,nutrition) => {
    e.preventDefault()
    dispatch(handleNutritionReceipts(nutrition))
  }
  return (
    <div>
      <form
        className="grid place-content-center"
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
      </div>
      )
}

export default NutritionForm