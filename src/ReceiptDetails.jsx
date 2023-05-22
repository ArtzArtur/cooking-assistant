import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ReceiptDetails() {
  const { id } = useParams();
  const endPoint = `${id}/information?`;
  const dispatch = useDispatch();
  

  return <div>details</div>;
}

export default ReceiptDetails;
