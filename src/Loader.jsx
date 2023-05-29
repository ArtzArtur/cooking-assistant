import React from 'react'

function Loader() {
  return (
    <div className="bg-red-800 min-h-[30vh] grid place-content-center">
      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader