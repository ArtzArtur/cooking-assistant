import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import RandomReceipts from "./RandomReceipts";
import ReceiptDetails from "./ReceiptDetails";
import { useState } from "react";
function App() {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav((oldVal) => (oldVal = !oldVal));
  };
  return (
    <div>
      <Router>
        <header className="p-2 bg-red-800 text-white">
          <div className="text-center flex justify-center items-center">
            <div>
              <h1 className="p-2 text-3xl font-bold">Cooking helper</h1>
              <h2 className="p-1 text-md text-thin">
                Receipts and all you need
              </h2>
            </div>
            <i className="px-5 fas fa-utensils text-3xl"></i>
          </div>
          <nav className="bg-red-600 flex justify-end rounded-xl lg:max-w-[1000px] py-2 lg:mx-auto">
            {!showNav ? (
              <i
                className="fas fa-bars text-3xl pr-5 hover:text-red-200 cursor-pointer sm:hidden"
                onClick={() => handleNav()}
              ></i>
            ) : (
              <i
                className="fa fa-times text-3xl pr-5  z-10 hover:text-slate-300 cursor-pointer"
                onClick={() => handleNav()}
              ></i>
            )}

            <ul
              className={`grid h-screen w-full place-content-center absolute top-0 left-0 bg-red-700 transition-opacity duration-500 ${
                showNav
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } sm:opacity-100 sm:pointer-events-auto sm:h-auto sm:static sm:flex sm:bg-transparent`}
            >
              <li className="p-2 m-2">
                <Link className="hover:text-red-200" to="/cooking-assistant/">Home</Link>
              </li>
              <li className="p-2 m-2">
                <Link className="hover:text-red-200" to="/cooking-assistant/RandomReceipts">Random receipts</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/cooking-assistant/" element={<Home />}></Route>
          <Route path="/cooking-assistant/ReceiptDetails/:id" element={<ReceiptDetails />}></Route>
          <Route path="/cooking-assistant/RandomReceipts" element={<RandomReceipts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
