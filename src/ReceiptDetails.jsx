import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleDetails } from "./store/detailsSlice";

function ReceiptDetails() {
  const { id } = useParams();
  const endPoint = `${id}/information?`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleDetails(id));
  }, []);
  const details = useSelector((state) => state.details.details);
  const error = useSelector((state) => state.details.error);
  const loading = useSelector((state) => state.details.loading);
  console.log(details);
  return (
    <div>
      {loading ? <div>Loading...</div> : null}
      {error ? <div>{error}</div> : null}
      {details ? (
        <div>
          <header>
            <h1>{details.title}</h1>
          </header>
          <ul>
            {details.dishTypes
              ? details.dishTypes.map((type) => <li>{type}</li>)
              : null}
          </ul>
          <img src={details.image} alt="dish image" />
          <article>
            <p>
              {details.instructions}
            </p>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default ReceiptDetails;
