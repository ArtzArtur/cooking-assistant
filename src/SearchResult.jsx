import { Link } from "react-router-dom";
import { memo } from "react";

function Results({ meal }) {
  return (
    <div className="flex-[0_1] p-2 m-2 rounded-xl lg:min-w-[350px] shadow-md hover:shadow-[0_0_2px_red] hover:text-red-800 text-black">
      {meal.image ? (
        <div className="mx-auto">
          <Link
            className="font-bold min-h-[5rem] grid place-content-center rounded-xl mx-auto cursor-pointer max-w-[50ch]"
            to={`/cooking-assistant/ReceiptDetails/${meal.id}`}
          >
            <p className="py-2 text-center">
              {meal.title.length < 30
                ? meal.title
                : meal.title.substring(0, 30) + "..."}
            </p>
            <div>
              <img
                src={meal.image}
                alt="food photo"
                className="max-w-[320px] max-h-[300px] rounded-b-xl mx-auto"
              />
            </div>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default memo(Results);
