function Results({ meal, error, loading }) {
  console.log(meal);
  return (
    <div className="flex-[1_0] p-5 m-2 bg-red-900 rounded-xl">
      {meal.image ? <div>

      <header className="min-h-[5rem] grid place-content-center">
        <h1 className="first-letter:uppercase">{meal.title}</h1>
      </header>
      <div>
        <img src={meal.image} alt="meal" className="max-w-[250px] max-h-[175px] rounded-xl mx-auto"/>
      </div>
      </div> :null}
    </div>
  );
}

export default Results;
