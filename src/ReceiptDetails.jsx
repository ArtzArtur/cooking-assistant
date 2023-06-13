import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleDetails } from "./store/detailsSlice";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function ReceiptDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details.details);
  const error = useSelector((state) => state.details.error);
  const loading = useSelector((state) => state.details.loading);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(handleDetails(id));
  }, [id]);
  console.log(details)
  return (
    <div className="text-center max-w-[950px] mx-auto">
      <div className="text-left  p-2">
        <i
          className="fas fa-arrow-circle-left hover:text-red-600  text-red-800 text-3xl hover:cursor-pointer"
          onClick={() => navigate(-1)}
        ></i>
      </div>
      {loading ? <Loader /> : null}
      {error ? (
        <div className="bg-red-800 text-white p-4 tracking-wide">{error}</div>
      ) : null}
      {details ? (
        <div>
          <header className="p-4">
            <h1>{details.title}</h1>
          </header>

          <img src={details.image} alt="dish image" className="mx-auto p-2" />
          <article>
            {details.analyzedInstructions[0]
              ? details.analyzedInstructions[0].steps.map(
                  (instruction, idx) => (
                    <div
                      key={idx}
                      className="p-4 grid sm:grid-cols-[70px_1fr] shadow-md my-8 items-center"
                    >
                      <span className="p-2 w-[40px] h-[40px] bg-red-800 text-white rounded-full block mx-auto">
                        {instruction.number}
                      </span>
                      <p>{instruction.step}</p>
                    </div>
                  )
                )
              : null}
            <div className="bg-slate-700 text-white p-3">
              <span>
              Credits:
                </span>
            <p>{details.creditsText}</p>
              
              </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default ReceiptDetails;
