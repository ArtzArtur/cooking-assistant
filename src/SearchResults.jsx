import { Link } from "react-router-dom";

function Results({ meal, error, loading }) {
  console.log(meal);
  return (
    <div className="flex-[1_0] p-5 m-2 bg-red-900 rounded-xl lg:min-w-[450px] hover:bg-red-800 cursor-pointer">
      {meal.image ? <div>

      <header className="min-h-[5rem] grid place-content-center outline outline-1 mb-5 rounded-xl max-w-[fit-content] p-5 mx-auto ">
        <h1 className="first-letter:uppercase">{meal.title}</h1>
      </header>
      <div>
        <Link to={`/cooking-assistant/ReceiptDetails/${meal.id}`}>Detailed info</Link>
      </div>
      <div>
        <img src={meal.image} alt="meal" className="max-w-[250px] max-h-[175px] md:max-w-[350px] md:max-h-[250px] rounded-xl mx-auto"/>
      </div>
      </div> :null}
    </div>
  );
}

export default Results;
