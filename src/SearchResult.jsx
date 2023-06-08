import { Link } from "react-router-dom";
import { memo } from "react";

function Results({ meal }) {
  return (
    <div className="flex-[0_1] p-2 m-2 rounded-xl lg:min-w-[350px] bg-white text-black">
      {meal.image ? (
        <div className="max-w-[fit-content] mx-auto">
          <Link
            className="font-bold min-h-[5rem] grid place-content-center rounded-t-xl mx-auto bg- hover:bg-red-400 hover:text-white cursor-pointer max-w-[50ch]"
            to={`/cooking-assistant/ReceiptDetails/${meal.id}`}
          >
            <p className="py-2">
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
