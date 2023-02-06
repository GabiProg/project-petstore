import "../src/assets/styles/reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InitialSrcreen from "./components/InitialSreen/index";
import Cart from "./components/Cart/index";
import InfoProduct from "./components/InfoProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialSrcreen />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<InfoProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
