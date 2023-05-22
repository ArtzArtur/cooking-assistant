function RandomReceipts() {
  const apiKey = import.meta.env.VITE_APIKEY
  const endPoint = `random?number=5&apiKey=${apiKey}`

  return (
    <div  className="text-center">
      <h3 className="p-2">Random receipts</h3>
      
    </div>
  )
}

export default RandomReceipts