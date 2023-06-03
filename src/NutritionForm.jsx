import { useState } from "react"

function NutritionForm() {
  const [protein,setProtein] = useState(0)
  const handleChange = (val) => {
    setProtein(old=>old=val)
  }
  return (
    <div>
      <form
        className="grid place-content-center"
      >
        <label>Protein:</label>
        <p>{protein}</p>
        <input
          type='range' min="0" max="999" step="1"
          onChange={(e)=>handleChange(e.target.value)}
        />
        <button className="p-2 m-2 border-2 border-white rounded-xl hover:bg-red-600">
          Search
        </button>
      </form>
      </div>
      )
}

export default NutritionForm