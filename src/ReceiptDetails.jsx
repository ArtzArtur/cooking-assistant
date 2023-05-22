import { useParams } from "react-router-dom"

function ReceiptDetails() {
  const {id} = useParams()
  return (
    <div>
      {id ? <div>{id}</div> : null}
    </div>
  )
}

export default ReceiptDetails