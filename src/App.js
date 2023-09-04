import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./component/Cards";
import Info from "./component/Info";
import DebitCredit from "./component/DebitCredit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/info" element={<Info />} />
          <Route path="/txn" element={<DebitCredit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
