import { useEffect,memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleDetails } from "./store/detailsSlice";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function ReceiptDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleDetails(id));
  }, [id]);
  const details = useSelector((state) => state.details.details);
  const error = useSelector((state) => state.details.error);
  const loading = useSelector((state) => state.details.loading);
  console.log(details);
  return (
    <div className="text-center max-w-[950px] mx-auto">
      <div className="text-left  p-2">
        <Link to="/cooking-assistant/" className="fas fa-arrow-circle-left hover:text-red-600  text-red-800 text-lg"></Link>
      </div>
      {loading ? <Loader /> : null}
      {error ? <div>{error}</div> : null}
      {details ? (
        <div>
          <header className="p-4">
            <h1>{details.title}</h1>
          </header>
          
          <img src={details.image} alt="dish image" className="mx-auto p-2"/>
          <article>
            {details ? details.analyzedInstructions[0].steps.map((instruction,idx)=>
            <div key={idx} className="p-2 grid grid-cols-[70px_1fr] shadow-md m-4 items-center">
              <span className="p-2 w-[40px] h-[40px] bg-red-800 text-white rounded-full">{instruction.number}</span>
              <p>{instruction.step}</p>
            </div>
            ) :null}
            <span>Credits:</span>
            <p>{details.creditsText}</p>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default memo(ReceiptDetails);
