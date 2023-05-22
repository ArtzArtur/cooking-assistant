import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleDetails } from "./store/detailsSlice";

function ReceiptDetails() {
  const { id } = useParams();
  const endPoint = `${id}/information?`;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(handleDetails(id))
  },[])

  return <div>details</div>;
}

export default ReceiptDetails;
